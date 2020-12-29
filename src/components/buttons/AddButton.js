import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import CookieModal from "../modals/CookieModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <CookieModal isOpen={isOpen} closeModal={closeModal} />
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
    </>
  );
};

export default AddButton;
