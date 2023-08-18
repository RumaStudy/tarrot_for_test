import React from "react";
import ShopList from "./ShopList";

const Main = ({ data }) => {
  return (
    <section id="main">
      <div className="mainVisual">
        <img
          src={`${process.env.PUBLIC_URL}/img/mainBanner.jpg`}
          alt="메인 배너 이미지"
        />
      </div>
      <div className="inner">
        <ShopList data={data} />
      </div>
    </section>
  );
};

export default Main;
