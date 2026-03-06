import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    props.productsList.length > 0 ?  
    props.productsList.map((product,i)=>{
      return <Product product={product} key={i}  handleIncrement={props.handleIncrement} index={i} handleDecrement={props.handleDecrement} removeProduct={props.removeProduct} />;
      
      })
    :<h1 className="text-center mt-5">No products in the cart</h1>
  );
}