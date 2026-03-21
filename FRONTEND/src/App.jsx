import { useDispatch } from "react-redux";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useEffect } from "react";
import axiosInstance from "./api/config";
import { loginuser } from "./store/reducers/userSlice";


const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    (async ()=>{
      try {
        const res = await axiosInstance.get("/api/auth/me");
        console.log("this the current use")
        if(res){
          dispatch(loginuser(res?.data.user));
        }
      } catch (error) {
        console.log("error in while fetching current user", error);
      }
    })()
  },[dispatch])

  return (
    <>
      <div className="min-h-full w-full">
        <Nav />
        <Mainroutes />
      </div>
    </>
  )
}

export default App;
