/* eslint-disable react/prop-types */

const Navbar = ({selectedProduct,accountMainMoney}) => {
    return (
        <div className="w-full bg-slate-100">
            <div className="flex justify-between mx-8 p-5">
                <h1>Logo</h1>
                <div className=" flex gap-5 font">
                    <h1>Home</h1>
                    <h2>Product</h2>
                    <h3>cart : {selectedProduct.length}</h3>
                    <h3>$ {accountMainMoney}</h3>
                </div>
            </div>
        </div>
    );
};

export default Navbar;