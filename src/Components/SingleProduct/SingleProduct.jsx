/* eslint-disable react/prop-types */

const SingleProduct = ({ product,handleSelectedProduct }) => {
    const { name, image, description, price, isFeature } = product;
    return (
        <div >
            <div className="card bg-base-100 shadow-xl w-72 h-[400px] p-5 border mb-4 rounded-2xl">
                <figure>
                    <img
                        src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-bold">Name:{name}</h2>
                    <div className="flex justify-between text-xs font-semibold mb-3">
                    <p >Price:${price}</p>
                    <p>{isFeature?'Feature Category':'not category'}</p>
                    </div>
                    <p className="text-sm ">Description:{description}</p>
                    <button onClick={()=>handleSelectedProduct(product)} className=" bg-blue-700 text-white px-5 py-2 mt-4 rounded-lg">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;