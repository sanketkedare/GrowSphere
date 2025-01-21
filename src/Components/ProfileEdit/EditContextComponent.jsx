import { createContext, useEffect, useState } from "react";
import useUserData from "../../Hooks/useUserData";
import { useUpdate } from "../../Hooks/useRegister";

// Create the EditContext
export const EditContext = createContext();

const EditContextComponent = ({ children }) => {
  const userData = useUserData();
  const [index, setIndex] = useState(0);
  const [newData, setNewData] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await useUpdate(userData._id, newData);
    if (response.success) {
      setSuccess(true);
      setMessage("Successfully updated profile");
    } else {
      setSuccess(false);
      setMessage("Error updating profile");
    }
  };

  useEffect(() => {
    if (userData) {
      setNewData(JSON.parse(JSON.stringify(userData)));
    }
  }, [userData]);

  useEffect(() =>{
    setMessage('')
    setSuccess(null)
  },[newData,index ])

  return (
    <EditContext.Provider
      value={{
        message,
        userType:newData?.userType,
        success,
        userData,
        newData,
        setNewData,
        submitHandler,
        handleChange,
        index,
        setIndex,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditContextComponent;
