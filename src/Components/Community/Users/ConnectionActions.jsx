import { IoMdPersonAdd, IoMdClose, IoMdCheckmark } from "react-icons/io";

const ConnectionActions = ({ 
  isConnected, 
  isPending, 
  isRequested, 
  sendConnectionRequest, 
  deleteConnectionRequest, 
  acceptConnectionRequest, 
  item 
}) => {
  return (
    <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
      {isConnected && (
        <button className="bg-green-500 text-black p-2 rounded-md flex items-center gap-2" disabled>
          <IoMdCheckmark />
          <span>Connected</span>
        </button>
      )}
      {isPending && (
        <button
          className="bg-yellow-500 text-black p-2 rounded-md flex items-center gap-2"
          onClick={() => acceptConnectionRequest(item?._id)}
        >
          <IoMdCheckmark />
          <span>Accept</span>
        </button>
      )}
      {isRequested && (
        <button
          className="bg-red-500 text-black p-2 rounded-md flex items-center gap-2"
          onClick={() => deleteConnectionRequest(item?._id)}
        >
          <IoMdClose />
          <span>Cancel Request</span>
        </button>
      )}
      {!isConnected && !isPending && !isRequested && (
        <button
          className="bg-sky-500 text-black p-2 rounded-md flex items-center gap-2"
          onClick={() => sendConnectionRequest(item?._id)}
        >
          <IoMdPersonAdd />
          <span>Connect</span>
        </button>
      )}
    </div>
  );
};

export default ConnectionActions;
