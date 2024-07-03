
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Redux/userSlice";
import { LOGO } from "../utils/constants";

const Header = (prop) => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
    const data = useSelector((store) => store.user);
  
    const clickHandler=()=>{
      dispatch(removeUser());
      navigate('/')
    }
    


  return (
    <div className="absolute  z-30 w-screen px-28 pt-5 bg-gradient-to-b  from-black flex justify-between  ">
      <Link to="/">
        <img
          className="w-44"
          src= {LOGO}
          alt="logo"
        />
      </Link>
      {prop.btn === true ? (
        <Link to="/login">
          <button className=" rounded-md bg-red-600 text-white font-bold px-3 py-2 mt-4 hover:bg-red-700">
            Sign in
          </button>
        </Link>
      ) : (
        <></>
      )}
      {data && <button onClick={clickHandler} className="text-white font-bold text-xl">Sign out</button>}
    </div>
  );
};

export default Header;
