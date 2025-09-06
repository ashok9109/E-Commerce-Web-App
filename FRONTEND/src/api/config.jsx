import axios from "axios";
import { store } from "../store/store";
import { setError } from "../store/reducers/errorSlice";


const instance = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
});

instance.interceptors.response.use(
    (reponse) => reponse,
    (error) => {
        let errorMsg = error.reponse?.data?.message;
        store.dispatch(setError(errorMsg));
        return Promise.reject(error)
    }
)

export default instance;