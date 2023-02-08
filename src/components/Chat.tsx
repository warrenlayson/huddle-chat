import React from "react";

const Chat = () => {
  return (
    <div className="flex h-full max-w-7xl flex-col py-10">
      {/* Tools */}
      <div className="flex shrink flex-grow-0 basis-0 items-center">
        <button
          type="button"
          className="inline-block rounded bg-red-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
        >
          Reset Messages
        </button>
        <button
          type="button"
          className="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        >
          Logout
        </button>
      </div>
      {/* Messages */}
      <div className="box-border flex w-full shrink grow basis-auto flex-col overflow-y-auto bg-gray-100 p-4">
        {/* Pau chat bubble */}
        <div className="m-4 ml-auto box-border min-h-[2.25rem] w-fit max-w-[66%] rounded-chat-right bg-blue-600 py-2 px-4 text-white shadow-chat">
          Hey. I'm Paulo. You can call me Pau :)
        </div>
        {/* User chat bubble */}
        <div className="m-4 box-border min-h-[2.25rem] w-fit  max-w-[66%] rounded-chat-left bg-white py-2 px-4 shadow-chat">
          Hi! Nice to meet you
        </div>
      </div>
      {/* Send Message */}
      <div className="shrink grow-0 basis-10"></div>
    </div>
  );
};

export default Chat;
