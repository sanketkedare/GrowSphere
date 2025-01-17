import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { COMPANY } from "../../../Utils/constants";
import fetchData from "../../../Utils/fetchData";
import { company, invester } from "../../../API/apis";
import { Link, useLocation } from "react-router-dom";

const UserCart = ({ client, ntfId }) => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [clientDetails, setClientDetails] = useState({});
  const { user } = useSelector((state) => state.user);

  const getData = async (API) => {
    const response = await fetchData(API);
    setClientDetails(response.data);
  };

  useEffect(() => {
    if (user && user?.userType) {
      const API =
        user?.userType === COMPANY
          ? `${invester}${client?.investerId}`
          : `${company}${client?.companyId}`;
      getData(API);
    }
  }, [user]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Link
        to={`/discuss/${ntfId}`}
        className={`${id === ntfId && "bg-sky-400"}`}
      >
        <div
          className={`z-50 p-2 mb-3 min-h-[70px] flex gap-2 border rounded-xl shadow-xl ${
            id === ntfId ? "bg-gray-600 " : "bg-gray-900"
          } `}
        >
          <img
            src={clientDetails?.imageUrl || clientDetails?.image}
            alt="profile"
            className="border border-sky-400 w-14 object-contain overflow-hidden rounded-full"
          />
          <div>
            <h1 className="font-bold">{clientDetails?.name}</h1>
            <h1 className="italic overflow-hidden text-sm">
              {clientDetails?.role || clientDetails?.location}
            </h1>
          </div>
        </div>
      </Link>

      {/* View Profile Button */}
      {show && (
        <Link to={`/profile/${id}`}>
          <button
            className={`absolute bottom-0 -right-20 p-2 h-10 rounded-r-full z-10 text-sm transition-all duration-300 border hover:bg-gray-900
                      ${
                        id === ntfId
                          ? "bg-gray-600 text-white"
                          : "bg-gray-900 text-gray-200"
                      }`}
          >
            View Profile
          </button>
        </Link>
      )}
    </div>
  );
};

export default UserCart;
