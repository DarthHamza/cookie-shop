import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import CookieModal from "../modals/CookieModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModel = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <CookieModal isOpen={isOpen} closeModal={closeModal} />
      <BsPlusCircle className="float-right" size="2em" onClick={openModel} />
    </>
  );
};

export default AddButton;
