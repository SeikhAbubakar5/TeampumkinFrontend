import React from 'react'
import Chatbar from './Chatbar'
import Typemessage from './TypeMessage'
import Message from './message'
function Rightside() {
  return (
    <div className="w-full bg-white text-gray-300">
      <>
            <Chatbar />
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Message/>
            </div>
            <Typemessage />
          </>
    </div>
  )
}

export default Rightside
