/* eslint-disable react/prop-types */

const Cart = ({selectedProduct,handleDelete}) => {
  
    return (
        <div className='grid grid-cols-2 border p-3 gap-2 ml-10 w-80 lg:w-11/12'>
            {
                selectedProduct.map(p => (
                    <div key={p.id} className='border p-3 '>
                        <img src={p.image} alt="" />
                        <p className='font-bold'>Name:{p.name}</p>
                        <p className='font-semibold'>Price:{p.price}</p>
                        <button onClick={()=> handleDelete(p.id)} className=' bg-blue-700 px-4 py-2 rounded-lg'>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;