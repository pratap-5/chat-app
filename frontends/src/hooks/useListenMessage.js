import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import notificationSound from "../assets/sound/notification_tone.mp3"

function useListenMessage() {
  const { onlineUser, socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

    useEffect(() => {
      socket?.on("newMessage", (newMessage) => {
        toast.success(newMessage.message);
        const sound = new Audio(notificationSound);
        sound.play();
        newMessage.shake = true;
        setMessages([...messages, newMessage]);
      });

    return () => socket.off("newMessage");
  }, [socket, messages]);
}

export default useListenMessage;
