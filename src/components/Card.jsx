import React from "react";

const Card = ({ date, title }) => {
  return (
    <>
      <div className="blog-card">
        <h3>
          <b>{title}</b>{" "}
        </h3>
        <p style={{ fontSize: ".8rem" }}>{date}</p>
      </div>
    </>
  );
};

export default Card;
