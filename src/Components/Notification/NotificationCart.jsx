import React, { useEffect, useState } from "react";

const NotificationCart = ({ notification }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const statement = notification?.massages
      ? "New massage received for direct investment"
      : "New meeting request received for investment";
    setMessage(statement);
  }, [notification]);

  return (
    <div className="bg-gray-100 text-sm p-4 rounded shadow-md hover:bg-gray-200 transition duration-200 ease-in-out">
      {message}
    </div>
  );
};

export default NotificationCart;