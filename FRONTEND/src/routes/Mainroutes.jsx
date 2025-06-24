import { Route, Routes } from "react-router";
import Product from "../pages/Product";
import Setting from "../pages/Setting";
import CreateProduct from "../pages/CreateProduct";
import Cart from "../pages/Cart";
import Signin from "../pages/signin";
import Signup from "../pages/Signup";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";

const Mainroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/About" element={<About />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Mainroutes;
