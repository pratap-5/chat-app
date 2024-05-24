import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConversation";

function Home() {
  const {
    isOpenChat,
    setOpenChat,
  } = useConversation();
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <div className="flex h-screen w-screen  md:w-[800px] md:h-[550px] rounded-lg  overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {!isOpenChat || width > 680 ? <SideBar /> : ""}


      {width > 680 ? <MessageContainer /> : isOpenChat?<MessageContainer />:""}
    </div>
  );
}

export default Home;
