import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  isopenChat: false,
  setOpenChat: (isopenChat) => set({ isopenChat }),
}));

export default useConversation;
