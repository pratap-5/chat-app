import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();


export const useSocketContext=()=>{
    return useContext(SocketContext)
}

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const { authUser } = useAuthContext();
  useEffect(() => {
    if (authUser) {
      const socket = io("https://chat-app-1-oa2k.onrender.com/", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);

      //socket.on used to listen the event can be used on both client and server side
      socket.on("getOnlineUser", (user) => setOnlineUser(user));

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUser }}>
      {children}
    </SocketContext.Provider>
  );
};
