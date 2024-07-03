import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Background_IMG } from "../utils/constants";


const Body = () => {

  return (
    <div className="relative">
      <Header btn={true} />
      <div >
        <div className="w-full h-[100vh] bg-black  opacity-50 absolute z-20"></div>
        <div className="absolute z-30 top-[30%]  w-full flex flex-col items-center justify-center   py-10">
          <h1 className="font-bold text-white text-5xl mb-3">
            {" "}
            Unlimited movies, TV shows and more
          </h1>
          <p className=" text-white text-2xl mb-3">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white text-2xl mb-2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="w-8/12  flex justify-center items-center mt-2">
            <input
              type="email"
              placeholder="Email address"
              className=" text-2xl p-2 text-white bg-transparent border-[1px] border-white outline-offset-2 rounded-md w-5/12"
            />
            <Link to="/login">
              <button className="rounded-md bg-red-600 text-white font-bold px-5 py-3  mx-3 hover:bg-red-700">
                Get Started{" "}
              </button>
            </Link>
          </form>
        </div>
        <img
          className="h-[100vh] w-full object-cover "
          src={Background_IMG}
          alt=" background_imageS"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Body;
