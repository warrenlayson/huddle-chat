import { auth } from "./lib/firebase";
import LoginForm from "./components/LoginForm";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <main className="flex h-screen flex-col items-center justify-center text-gray-800">
      {user ? (
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
