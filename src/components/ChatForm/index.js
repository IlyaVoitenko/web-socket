import React, { useState } from "react";
import PropTypes from "prop-types";

const ChatForm = ({ onSubmit }) => {
  const [state, setState] = useState({ message: "" });

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
    setState({ message: "" });
  };
  const { message } = state;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        сообщение =
        <input
          type="text"
          name="message"
          value={message}
          onChange={handleChange}
        />
      </label>
      <button type="submit">сенд</button>
    </form>
  );
};
ChatForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ChatForm;
