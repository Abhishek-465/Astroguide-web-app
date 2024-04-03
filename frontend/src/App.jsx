import { Outlet } from "react-router-dom";
import Nav from "./pages/Nav";
import React, { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [uid, setUid] = useState("");
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid("");
      }
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, [auth]);
  return (
    <div className="flex flex-col">
      {uid === "" ? <></> : <Nav />}
      <Outlet />
    </div>
  );
}

export default App;
