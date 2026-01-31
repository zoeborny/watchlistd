import { useState } from "react";
import { UsernameSearch } from "./components/Search/UsernameSearch";
import "react-i18next";

export default function App() {
  const [username, setUsername] = useState("");

  function handleSubmit() {
    console.log("[App] username submitted:", username);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
      <UsernameSearch
        value={username}
        onChange={setUsername}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
