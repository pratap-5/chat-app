import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

function useLogout() {
  const [loading, setLoading] = useState(false);
  const {setAuthUser}=useAuthContext()

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://chat-app-29u7.onrender.com/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null)
    } catch (error) {
    } finally {
      setLoading(false);

    }
  };
  return {loading,logout}
}

export default useLogout;
