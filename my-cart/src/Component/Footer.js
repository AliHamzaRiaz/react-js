import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button className="btn btn-danger col-2" onClick={()=>
         {props.handlReset()}
      }>Reset</button>
      <div className="col-8 bg-dark text-light text-center ">
        Total: ${props.totalPrice.toFixed(2)}
      </div>
              <button className="btn btn-primary col-2">Pay Now </button>

    </div>
  );
}
