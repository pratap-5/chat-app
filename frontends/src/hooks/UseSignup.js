import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/AuthContext";

function UserSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputsErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch(
        "https://chat-app-1-oa2k.onrender.com/api/auth/signup",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            fullName,
            userName,
            password,
            confirmPassword,
            gender,
          }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      //localstorage

      localStorage.setItem("chat-user", JSON.stringify(data));

      //context
      setAuthUser(data);
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
}

export default UserSignup;

function handleInputsErrors({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("please fill all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("passsword did not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("passwordd must  contain six charaacter");
  }

  return true;
}
