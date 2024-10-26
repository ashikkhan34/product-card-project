/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";


const AllProduct = ({handleSelectedProduct}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('product.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className="w-2/4  ml-8  p-5 m-auto">
            <h1>AllProduct: {products.length}</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 mx-auto mt-2">
           {
                products.map(product => <SingleProduct handleSelectedProduct={handleSelectedProduct} key={product.id} product = 
                     {product}></SingleProduct>
                )
            }
           </div>
        </div>
    );
};

export default AllProduct;