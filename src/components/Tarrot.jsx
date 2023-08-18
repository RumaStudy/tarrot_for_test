import React from "react";
import ItemCard from "./ItemCard";
import "./css/tarrot.css";

const Tarrot = ({ data }) => {
  const tarrotFilter = data.filter((item) => item.category === "card");
  return (
    <section id="tarrot">
      <div className="inner">
        {tarrotFilter.map((item) => (
          <ItemCard data={item} />
        ))}
      </div>
    </section>
  );
};

export default Tarrot;
