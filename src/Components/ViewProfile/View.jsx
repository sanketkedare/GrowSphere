import React, { useEffect, useState } from "react";
import { COMPANY, INVESTER } from "../../Utils/constants";
import fetchData from "../../Utils/fetchData";
import { company, invester } from "../../API/apis";
import ViewCompany from "./ViewCompany";
import ViewInvester from "./ViewInvester";
import ViewEmployee from "./ViewEmployee";
import DiscussionGoHome from "../Discussion/DiscussionGoHome";

const View = () => {
  const [clientsData, setClientsData] = useState(null);
  const params = location.pathname.split("/").pop();
  const type = params.substring(0, 3);
  const id = params.substring(3);

  const getClientsData = async () => {
    let API;
    if (type === INVESTER) {
      API = `${invester}${id}`;
      const client = await fetchData(API);
      setClientsData(client.data);
    } else if (type === COMPANY) {
      API = `${company}${id}`;
      const client = await fetchData(API);
      setClientsData(client.data);
    } else {
      alert("Invalid User Type");
    }
  };

  useEffect(() => {
    getClientsData();
  }, [id, type]);

  if (!clientsData) {
    return (
      <div className="text-white h-screen flex justify-center items-center">
        Loading......
      </div>
    );
  }

  return (
    <div className="relative text-white">
      {clientsData &&
        (type === COMPANY ? (
          <ViewCompany clientsData={clientsData} />
        ) : type === INVESTER ? (
          <ViewInvester clientsData={clientsData} />
        ) : (
          <ViewEmployee clientsData={clientsData} />
        ))}
        <DiscussionGoHome/>
    </div>
  );
};

export default View;
