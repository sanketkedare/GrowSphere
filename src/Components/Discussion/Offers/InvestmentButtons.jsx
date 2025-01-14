import React from "react";
import investmentsHandler from "../../../Utils/investmentsHandler";
import { useSelector } from "react-redux";

const InvestmentButtons = ({ investment, selectedSlot, setSelectedSlot }) => {
  const { user } = useSelector((state) => state.user);
  const type = user?.userType; // Get the user type (CMP, INV, or EMP)
  const progressArray = [
    "Pending",
    "Approved",
    "Rejected",
    "In Progress",
    "Completed",
  ];
  const progress = investment?.progress;

  const handleMeeting = async () => {
    let meetingTimeSlots;
    let notificationMessage;

    if (selectedSlot) {
      // Handle slot acceptance
      meetingTimeSlots = selectedSlot;
      notificationMessage = `Accepted Slot: ${selectedSlot.day} - ${selectedSlot.slot}`;
    } else {
      // Handle default meeting request
      const dayAfterTomorrow = new Date();
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
      meetingTimeSlots = `${dayAfterTomorrow.toDateString()} at 12 PM`;
      notificationMessage = "Meeting requested! Please wait for confirmation.";
    }

    const obj = {
      ...investment,
      meeting: {
        timeSlots: meetingTimeSlots,
        link: "xyz.com",
      },
      massages: [...investment?.massages, "Meeting Scheduled"],
      progress: "Approved",
    };

    const response = await investmentsHandler(investment?._id, obj);
    console.log(response);

    if (response.success) {
      alert(notificationMessage);
      if (selectedSlot) setSelectedSlot(null);
    } else {
      alert("Something went wrong");
    }
  };

  const rejectOffer = async () => {
    const obj = {
      ...investment,
      massages: [...investment.massages, "Offer Rejected"],
      progress: "Rejected",
    };

    const response = await investmentsHandler(investment?._id, obj);

    if (response.success) {
      alert("Offer Rejected!");
    } else {
      alert("Something went wrong while rejecting the offer.");
    }
  };

  const cancelInvestment = async () => {
    const obj = {
      ...investment,
      massages: [...investment.massages, "Investment Cancelled"],
      progress: "Rejected",
    };

    const response = await investmentsHandler(investment?._id, obj);

    if (response.success) {
      alert("Investment Cancelled!");
    } else {
      alert("Something went wrong while cancelling the investment.");
    }
  };

  const makePayment = () => {
    alert("Redirecting to payment process...");
    // Payment logic here
  };

  return (
    <div className="flex justify-between items-center">
      {type === "INV" && (
        <>
          {progress === progressArray[0] && (
            <button
              className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              onClick={cancelInvestment}
            >
              Cancel Investment
            </button>
          )}
          {progress === progressArray[1] && (
            <button
              className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              onClick={cancelInvestment}
            >
              Cancel Investment
            </button>
          )}
          {progress === progressArray[3] && (
            <>
              <button
                className="px-4 py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-600 transition"
                onClick={makePayment}
              >
                Make Payment
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                onClick={cancelInvestment}
              >
                Cancel Investment
              </button>
            </>
          )}
        </>
      )}

      {type === "CMP" && (
        <>
          {progress === progressArray[0] && (
            <>
              {investment?.massages && (
                <button
                  className="px-4 py-2 rounded-lg bg-blue-500 text-black font-semibold hover:bg-blue-600 transition"
                  onClick={handleMeeting}
                >
                  Request Meeting
                </button>
              )}
              {!investment?.massages && (
                <button
                  className="px-4 py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-600 transition"
                  onClick={handleMeeting}
                >
                  Accept Selected Slot
                </button>
              )}
              <button
                className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                onClick={rejectOffer}
              >
                Reject Offer
              </button>
            </>
          )}
          {progress === progressArray[3] && (
            <>
              <button
                className="px-4 py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-600 transition"
                onClick={() => alert("Payment Received!")}
              >
                Payment Received
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                onClick={cancelInvestment}
              >
                Cancel Investment
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default InvestmentButtons;
