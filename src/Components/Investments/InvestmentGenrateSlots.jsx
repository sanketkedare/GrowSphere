export const generateTimeSlots = (updateTimeSlots, timeSlots) => 
{
  const times = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM","2:00 PM", "3:00 PM", "4:00 PM"];

  return Array.from({ length: 5 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const dateString = date.toDateString();

    return (
      <div key={i} className="my-4">
        <h3 className="font-semibold text-lg">{date.toDateString()}</h3>
        <div className="flex gap-3 justify-between mt-2">
          {times.map((time, j) => (
            <button
            key={j}
            onClick={() => updateTimeSlots({ date: dateString, time })}
            className={`px-4 py-2 rounded-lg ${
              timeSlots[dateString]?.includes(time)
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={timeSlots[dateString]?.includes(time)} // Disable if already selected
          >
            {time}
          </button>
          ))}
        </div>
      </div>
    );
  });
};