import { Link } from "react-router-dom";

const Header = (prop) => {
  return (
    <div className="absolute  z-30 w-full px-36 pt-5 bg-gradient-to-b  from-black flex justify-between  ">
      <Link to="/">
        <img
          className="w-52  "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </Link>
      {prop.btn === true ? (
        <Link to="/login">
          <button className=" rounded-md bg-red-600 text-white font-bold px-3 py-2 mt-4 hover:bg-red-700">
            <Link to="/login">Sign in</Link>
          </button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
