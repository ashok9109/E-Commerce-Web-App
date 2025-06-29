import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userActions";

const App = () => {
  
  const {user} = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    !user && dispatch(asynccurrentuser());
  }, [user]);

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
