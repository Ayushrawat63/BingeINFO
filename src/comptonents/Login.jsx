import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  return(
    <>
    <Header btn={false}/>
    <div className=" ">
        <div className="w-full h-[100vh] bg-black  opacity-50 absolute z-20"></div>
        <div className="absolute z-30  bg-black opacity-70 w-4/12 left-[33%] top-32 p-8">
           <h3 className="text-3xl font-semibold text-white ml-8 mb-2">Sign In</h3>
          <form className="flex flex-col items-center ">
            <input type="email" placeholder="Email address" className="text-xl px-3 py-2 mt-4 w-5/6 text-white bg-transparent border-[1px] rounded-md border-white"/>
            <input type="password" placeholder="password" className="text-xl px-3 py-2 mt-4 w-5/6 text-white bg-transparent border-[1px] rounded-md border-white"/>
          
            <button className="rounded-md  bg-red-600 w-5/6 text-white font-bold px-3 py-2 mt-4 hover:bg-red-700">Sign in</button>
            <span className="text-white uppercase my-4">or</span>
             <span className="text-white hover:underline hover:cursor-pointer hover:text-slate-300">Forgot Password?</span>
          </form>
          <p className="text-slate-400 ml-9 mt-3">New to Netflix?<Link className="text-white ml-1 hover:underline" to="/signup">Sign up now</Link></p>
        </div>
        <img
          className="h-[100vh] w-full object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=" background_imageS"
        />
      </div>
    </>
  )
};

export default Login;
