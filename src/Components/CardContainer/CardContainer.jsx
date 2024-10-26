/* eslint-disable react/prop-types */
import About from "../About/About";
import Cart from "../Cart/Cart";
import "./CardContainer.css"


const CardContainer = ({handleIsActiveStatus,isActive,selectedProduct,handleDelete}) => {
    // console.log(handleIsActiveStatus)
    return (
        <div className="w-2/4">
            <h1 className="text-center mt-5">CardContainer</h1>

            <div className="flex justify-around font-semibold btn ">
                <div onClick={()=>handleIsActiveStatus('cart')} className= 
                 {`${isActive.cart?"btn active" : 'btn'}`} >Cart</div>
                <div onClick={()=> handleIsActiveStatus('about')} className={`${isActive.cart?"btn" : ' active btn'}`}>About</div>
            </div>


            {isActive.cart? <Cart selectedProduct ={selectedProduct} handleDelete ={handleDelete}></Cart> : <About></About>}
        </div>
    );
};

export default CardContainer;