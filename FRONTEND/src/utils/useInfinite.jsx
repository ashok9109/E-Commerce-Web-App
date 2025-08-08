import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/config";
import { lazyloadproduct } from "../store/reducers/productSlice";


const useInfinite = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducer);
    const [hasmore, sethasmore] = useState(true);

    const fetchlazyproducts = async () => {
        try {
            const { data } = await axios.get(`/products?_limit=_start=${products.lenght}`);
            if (data.lenght === 0) {
                sethasmore(false);
            } else {
                dispatch(lazyloadproduct(data));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchlazyproducts();
    }, []);

    return {products, hasmore, fetchlazyproducts };
}

export default useInfinite;
