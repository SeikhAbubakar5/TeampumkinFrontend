import React, { useEffect } from "react";

function Messages() {
    return (
        <div
            className="flex-1 overflow-y-auto"
            style={{ minHeight: "calc(92vh - 8vh)" }}
        >
            <div>
                <p className="text-center mt-[20%]">
                    Say! Hi to start the conversation
                </p>
            </div>

        </div>
    );
}

export default Messages;