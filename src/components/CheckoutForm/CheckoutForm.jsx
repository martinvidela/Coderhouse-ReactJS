import React, { useState } from "react";
import "./CheckoutForm.css";

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      lastname,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="Form">
      <form onSubmit={handleConfirm} className="Form">
        <div className="form__group">
          <label className="Label">Nombre</label>
          <input
            type="text"
            className="form__input"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div className="form__group">
          <label className="Label" placeholder="Apellido">
            Apellido
          </label>
          <input
            type="text"
            className="form__input"
            value={lastname}
            onChange={({ target }) => setLastname(target.value)}
          />
        </div>
        <div className="form__group">
          <label className="Label">Telefono</label>
          <input
            className="form__input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div className="form__group">
          <label className="Label">Email</label>
          <input
            className="form__input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="form__group">
          <button type="sumbit" className="ButtonSubmit">
            Create order
          </button>
        </div>
      </form>
    </div>
  );
};
