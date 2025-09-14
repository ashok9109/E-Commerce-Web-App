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
        let res = await axiosInstance.get("/api/auth/me");
        console.log("app.jsx user--", res.data.user)
        if(res){
          dispatch(loginuser(res?.data?.user));
        }
      } catch (error) {
        console.log("error in /me" ,error);
      }
    })()
  },[])

  return (
    <>
      <div>
        <Nav />
        <Mainroutes />
      </div>
    </>
  )
}

export default App;
