import { useState } from "react";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const setIsModalOpen = (newState: boolean) => {
    setisOpen(newState);
  };

  return {
    isOpen,
    setIsModalOpen
  }
}