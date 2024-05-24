import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import useConversation from "../../zustand/useConversation";



function SideBar() {
  const {selectedConversation}=useConversation();

  return (
    <div className= {`w-screen  sm:w-[400px]  sm:border-r sm:border-slate-500 flex flex-col py-2 px-3  ${selectedConversation?"hidden":""}`}>
    
      <SearchInput />
      <div className="divider px-3"></div>
       <Conversations/>
      <LogoutButton/> 
    </div>
  );
}

export default SideBar;
