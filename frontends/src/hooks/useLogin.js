import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useLogin() {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const login = async (userName, password) => {
    const success = handleInputsErrors({
      userName,
      password,
    });
    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ userName, password }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      //store it into your local storage
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
}

export default useLogin;

function handleInputsErrors({ userName, password }) {
  if (!userName || !password) {
    toast.error("please fill all the fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("passwordd must contain six charaacter");
  }

  return true;
}
