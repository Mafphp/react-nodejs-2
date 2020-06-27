import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        value={value}
        onChange={onChange} //value comming from account.username
        name={name}
        id={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
      {/* //if error is truty is rendered */}
    </div>
  );
};

export default Input;
