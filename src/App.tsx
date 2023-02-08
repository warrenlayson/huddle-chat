import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Chat from "./components/Chat";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });

  return (
    <main className="flex h-screen flex-col items-center justify-center text-gray-800">
      {currentUser ? (
        <Chat />
      ) : (
        <div className="max-w-4xl">
          <LoginForm />
        </div>
      )}
    </main>
  );
}

export default App;
