import React from 'react';

const Card = ({ zIndex = 0, text, imageUrl }) => (
  <div style={{ background: "whitesmoke", borderRadius: 3, width: "250px", height: "250px", cursor: "pointer", userSelect: "none", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", top: 0, zIndex }}>
    <img src={imageUrl} alt={text} />
    <p>{text}</p>
  </div>
);

export default Card;
