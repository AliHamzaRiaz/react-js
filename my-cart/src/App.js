import "./App.css";
import NavBar from "./Component/NavBar.js";
import ProductList from "./Component/ProductList.js";
import Footer from "./Component/Footer.js";
import React, { useState } from "react";

function App() {

  const [productsList, setProductsList] = useState([
    {
      price: 99.99,
      name: "iPhone 14 Pro",
      quantity: 1,
    },
    {
      price: 49.99,
      name: "Samsung Galaxy S23 Ultra",
      quantity: 1,
    },
  ]);
  let [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = (index) => {
    const newProductsList = [...productsList];
    let newTotalPrice = totalPrice + newProductsList[index].price;
    setTotalPrice(newTotalPrice);
    newProductsList[index].quantity++;
    setProductsList(newProductsList);
  };

  const handleDecrement = (index) => {
    const newProductsList = [...productsList];
    let newTotalPrice = totalPrice - newProductsList[index].price;  
    setTotalPrice(newTotalPrice);
    if (newProductsList[index].quantity > 0) {
      newProductsList[index].quantity--;
    }   else {
      alert("Quantity cannot be less than 0");
    } 
    setProductsList(newProductsList);
  };
  const handlReset=()=>{

    const newProductsList = [...productsList];
    newProductsList.map((product)=>{
      product.quantity=0;

  })
  setProductsList(newProductsList);
  setTotalPrice(0);

};

const removeProduct=(index)=>{
  const newProductsList = [...productsList];
  let newTotalPrice = totalPrice - (newProductsList[index].price * newProductsList[index].quantity);  
  setTotalPrice(newTotalPrice);
  newProductsList.splice(index,1);
  setProductsList(newProductsList);
  
} ;
  return (
    <>
      <NavBar />
      <main className="container mt-4">
        <ProductList
          productsList={productsList}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
            removeProduct={removeProduct} 
        />
      </main>
      {<Footer totalPrice={totalPrice}  handlReset={handlReset}  /> }
    </>
  );
}

export default App;