import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Product from "../pages/Product";
import About from "../pages/About";
import Cart from "../pages/Cart";
import CreateProduct from "../pages/CreateProduct";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Setting from "../pages/Setting";
import PageNotFound from "../pages/PageNotFound";


const Mainroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/About" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Mainroutes;
