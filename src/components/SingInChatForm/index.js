import React, { useState } from "react";
import PropTypes from "prop-types";

const SingInChatForm = ({ onSubmit }) => {
  const [state, setState] = useState({ name: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ name: "" });
  };
  const { name } = state;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя пользователя:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Войти в чат</button>
    </form>
  );
};
SingInChatForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SingInChatForm;
