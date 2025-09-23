// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { lazyloadproduct } from "../store/reducers/productSlice";
// import axiosInstance from "../api/config";


// const useInfinite = () => {
//     const dispatch = useDispatch();
    
//     const [hasmore, sethasmore] = useState(true);
    
//  const {products} = useSelector((state)=> state.productReducer)
//  console.log('infinite product', products)

//     const fetchlazyproducts = async () => {
//         try {
//             const { data } = await axiosInstance.get(`/api/products?_limit=_start=${products.lenght}`);
//             console.log( 'infinite data---', data)
//             if (data.lenght === 0) {
//                 sethasmore(false);
//             } else {
//                 dispatch(lazyloadproduct(data));
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         fetchlazyproducts();
//     }, []);

//     return {products, hasmore, fetchlazyproducts };
// }

// export default useInfinite;
