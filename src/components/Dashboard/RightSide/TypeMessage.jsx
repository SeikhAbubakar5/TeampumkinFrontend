import React, { useState } from "react";
import { IoSend } from "react-icons/io5";


function TypeMessage() {
  const [message, setMessage] = useState("");
 

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault()
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-1 h-[8vh] bg-gray-200">
        <div className=" w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-[1px] border-gray-300  flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-500 mt-1"
          />
        </div>
        <button>
          <IoSend className="text-3xl  bg-gray-150" />
        </button>
      </div>
    </form>
  );
}

export default TypeMessage;