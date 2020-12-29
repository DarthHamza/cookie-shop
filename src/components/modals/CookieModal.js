import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import { useDispatch } from "react-redux";
import { createCookie, updateCookie } from "../../store/actions";

const CookieModal = ({ isOpen, closeModal, oldCookie }) => {
  const dispatch = useDispatch();
  const [cookie, setCookie] = useState(
    oldCookie ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );
  const handleChange = (event) => {
    console.log(event.target);
    setCookie({ ...cookie, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldCookie) dispatch(updateCookie(cookie));
    else dispatch(createCookie(cookie));
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
              value={cookie.name}
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
              value={cookie.price}
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
            value={cookie.description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={cookie.image}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldCookie ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CookieModal;
