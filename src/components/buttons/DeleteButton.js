import React from "react";
import { DeleteButtonStyled } from "../../styles";
import { useDispatch } from "react-redux";
import { deleteCookie } from "../../store/actions";

const DeleteButton = ({ cookieId }) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteCookie(cookieId))}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
