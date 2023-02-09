import { auth } from "./lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { lazy } from "react";

const LoginForm = lazy(() => import("./components/LoginForm"));
const Chat = lazy(() => import("./components/Chat"));

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
