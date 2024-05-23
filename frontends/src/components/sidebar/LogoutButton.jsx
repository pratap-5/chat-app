import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
function LogoutButton() {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto cursor-pointer">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white  hover:text-black"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default LogoutButton;
