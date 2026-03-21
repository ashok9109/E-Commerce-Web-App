import axios from "axios";
// import { store } from "../store/store";
// import { setError } from "../store/reducers/errorSlice";
// import { toast } from "react-toastify";



const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
});


// axiosInstance.interceptors.response.use(
//     (response)=>response,
//     (reponse) => {
//         let res = reponse.data?.message;
//         if(res){
//             toast.success(response.data.message)
//         }
//     }

//     (error) => {
//         let errorMsg = error.response?.data?.message;
//         store.dispatch(setError(errorMsg));
//         return Promise.reject(error)
//     }
// )

export default axiosInstance;