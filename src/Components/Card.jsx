import React, { useState } from "react";

function Card(props){
  return(
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://i.pinimg.com/736x/3f/33/1f/3f331fc5090956527ad7a48ffc7bc6a8.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hello Image</h5>
          <p className="card-text">
           Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;