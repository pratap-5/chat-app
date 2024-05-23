import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

function SideBar() {
  return (
    <div className="border-r border-slate-500 flex flex-col py-2 px-3">
      ejfgeg
      <SearchInput />
      <div className="divider px-3"></div>
       <Conversations/>
      <LogoutButton/> 
    </div>
  );
}

export default SideBar;
