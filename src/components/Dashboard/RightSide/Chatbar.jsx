import React from "react";


function chartbar() {
 
 

  return (
    <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-100 hover:bg-gray-600 duration-300 text-black">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png'alt="avatar"/>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl mt-2">User name</h1>
      </div>
    </div>
  );
}

export default chartbar;