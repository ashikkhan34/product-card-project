import { useState } from "react";
import AllProduct from "./Components/AllProduct/AllProduct";
import CardContainer from "./Components/CardContainer/CardContainer";
import Navbar from "./Components/Header/Navbar";

const App = () => {

const [isActive ,setIsActive] = useState({
  cart: true,
  status:"cart"
})


// Active button 
const handleIsActiveStatus = (status) =>{
  if(status === "cart"){
    setIsActive({
      cart: true,
      status:"cart"
    })
  }
  else{
    setIsActive({
      cart: false,
      status:"about"
    })
  }
}
//product-- add-to card button 
const [selectedProduct,setSelectedProduct] =useState ([]);
 //double click functionality
const handleSelectedProduct = (pro) =>{
  const isexit = selectedProduct.find((p)=> p.id == pro.id)

  if(isexit){
    alert(' Already Exit')
  }
  else{
    handleIncreasePrice(pro.price)
    const newProduct = [...selectedProduct,pro];
  setSelectedProduct(newProduct)
  }
  
  
}

// remove selected product 
const handleDelete = (id) =>{
  handleDeletePrice(id)
  const remainingProduct = selectedProduct.filter((p) => p.id !== id)
  setSelectedProduct(remainingProduct)
}


//main price + product price add
const [accountMainMoney,setAccountMainMoney] = useState(500);

const handleIncreasePrice = (pr) =>{
  setAccountMainMoney(accountMainMoney + pr)
}

//main price - product price remove
const handleDeletePrice = (id) =>{
  const product = selectedProduct.find((P) => P.id == id)
  setAccountMainMoney(accountMainMoney - product.price)
}
  return (
    <div>
      <Navbar selectedProduct={selectedProduct} accountMainMoney ={accountMainMoney}></Navbar>
      <div className="block lg:flex justify-around">
        <AllProduct handleSelectedProduct = {handleSelectedProduct}></AllProduct>
        <CardContainer handleIsActiveStatus = {handleIsActiveStatus}
        isActive= {isActive}
        selectedProduct = {selectedProduct}
        handleDelete = {handleDelete}
        ></CardContainer>
      </div>
    </div>
  );
};

export default App;