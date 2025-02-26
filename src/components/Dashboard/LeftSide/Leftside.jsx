import React from "react";

import Users from "./user";
import Logout from "../Logout/Logout";
import { GrChatOption } from "react-icons/gr";

function Left() {
  return (
    <div className="w-[30%] bg-amber-100 text-gray-300">
      <div className=" flex">
      <h1 className="flex font-bold text-3xl p-2 px-6"><GrChatOption/><span className="mx-2 text-black">Chats</span></h1>

      <Logout />
      </div>
      
      <div
        className=" flex-1  overflow-y-auto"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>

    </div>

  );
}

export default Left;