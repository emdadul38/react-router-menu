import React from "react";

const Details = ({ match }: any) => {
  // console.log(match);
  return (
    <div>
      <h2>Product Details {match.params.id}</h2>
      <span>
        <p>Product Name: {match.url}</p>
        <p>Price: $220</p>
      </span>
    </div>
  );
};

export default Details;
