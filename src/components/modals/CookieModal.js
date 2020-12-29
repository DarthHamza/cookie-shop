import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import { useDispatch } from "react-redux";
import { createCookie } from "../../store/actions";

const CookieModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const [cookie, setCookie] = useState({
    name: "",
    price: 1,
    description: "",
    image: "",
  });
  const handleChange = (event) => {
    console.log(event.target);
    setCookie({ ...cookie, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCookie(cookie));
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Cookie Modal"
    >
      <h3>New Cookie</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              min="1"
              type="number"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CookieModal;
