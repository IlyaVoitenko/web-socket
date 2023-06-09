import React from "react";
import PropTypes from "prop-types";

const Chat = ({ items, nickname }) => {
  console.log("items:", items);
  const elements = items.map(({ id, type, message }) => {
    return <p key={id}>{message}</p>;
  });

  return (
    <div>
      {nickname} - {elements}
    </div>
  );
};
Chat.propTypes = {
  nickname: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Chat;
