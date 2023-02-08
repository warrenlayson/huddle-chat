import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { MdSend } from "react-icons/md";
import { firestore } from "../lib/firebase";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    const messageColRef = collection(firestore, "messages");
    await addDoc(messageColRef, {
      username: "pau",
      message,
      timestamp: serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <div className="flex items-center justify-between p-4">
      <input
        type="text"
        className="flex-grow=[2] mr-4 rounded border border-solid  border-gray-300 py-2 px-4 focus:text-gray-700"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "enter") {
            sendMessage();
          }
        }}
      />
      <MdSend className="mr-4 cursor-pointer text-2xl" onClick={sendMessage} />
    </div>
  );
};

export default SendMessage;
