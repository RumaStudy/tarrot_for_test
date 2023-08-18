import React from "react";
import "./css/itemCard.css";

const ItemCard = ({ data }) => {
  return (
    <article className="ItemCard">
      <img src={`${process.env.PUBLIC_URL}/img/${data.img}`} alt="" />
      <p
        style={{
          textTransform: "uppercase",
          color: "gray",
          fontWeight: "700",
        }}
      >
        {data.category}
      </p>
      <p style={{ fontSize: "1.3rem", fontWeight: "700" }}>{data.name}</p>
      <span
        style={{
          marginTop: "0.5rem",
          fontWeight: "700",
          fontSize: "1.1rem",
          color: "crimson",
        }}
      >
        {data.price} 원
      </span>
    </article>
  );
};

export default ItemCard;
