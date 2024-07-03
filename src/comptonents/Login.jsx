import { useRef, useState } from "react";
import Header from "./Header";
import { validSignUpData, validSignIpData } from "../utils/validate";
import { auth } from "../utils/firbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // console.log(auth);
  const navigate=useNavigate();
  const dispatch =useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // form validation code--

  // using useState()
  // const [email,setEmail]=useState("");
  // const [password,setPassword]=useState("");

  //using useRef
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const submitHandler = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = signIn
      ? validSignIpData(email.current.value, password.current.value)
      : validSignUpData(
          email.current.value,
          password.current.value,
          name.current.value
        );
    //  console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!signIn) {
      // logic for Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // console.log(userCredential);
          const user = userCredential.user;
          // console.log(user);
          updateProfile(auth.currentUser, {
            displayName:name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            console.log(auth);
            dispatch(addUser({uid:user.uid,email:user.email,displayName:auth.currentUser.displayName}))
            navigate('/browser')
            // ...
          }).catch((error) => {
            // An error occurred
            alert(error)
            // ...
          });
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          dispatch(addUser({uid:user.uid,email:user.email,displayName:auth.currentUser.displayName}))
          navigate('/browser')

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const clickHandler = () => {
    setSignIn(!signIn);
  };
  return (
    <>
      <Header btn1={false} />
      <div className=" ">
        <div className="w-full h-[100vh] bg-black  opacity-50 absolute z-20"></div>
        <div className="absolute z-30  bg-black opacity-70 w-2/6 left-[33%] top-32 p-8">
          <h3 className="text-3xl font-semibold text-white ml-8 mb-2">
            {signIn === true ? "Sign In " : "Sign up"}
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col items-center "
          >
            {!signIn && (
              <input
                ref={name}
                type="text"
                placeholder="Full name"
                className="text-xl px-3 py-2 mt-4 w-5/6 text-white bg-transparent border-[1px] rounded-md border-white"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email address"
              className="text-xl px-3 py-2 mt-4 w-5/6 text-white bg-transparent border-[1px] rounded-md border-white"
              // onChange={(e)=>{setEmail(e.target.value)}}
            />
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="text-xl px-3 py-2 mt-4 w-5/6 text-white bg-transparent border-[1px] rounded-md border-white"
              // onChange={(e)=>{setPassword(e.target.value)}}
            />
            <p className="text-red-500 -ml-36">{errorMessage}</p>
            <button
              onClick={submitHandler}
              className="rounded-md  bg-red-600 w-5/6 text-white font-bold px-3 py-2 mt-4 hover:bg-red-700"
            >
              {signIn === true ? "Sign In " : "Sign up"}
            </button>
            {signIn && <span className="text-white uppercase my-4">or</span>}
            {signIn && (
              <span className="text-white hover:underline hover:cursor-pointer hover:text-slate-300">
                Forgot Password?
              </span>
            )}
          </form>
          <p className="text-slate-400 ml-9 mt-3">
            {signIn === true ? "New to Netflix?" : "Already have account ?"}
            <button
              className="text-white ml-1 hover:underline"
              onClick={clickHandler}
            >
              {signIn == true ? "Sign up now" : "Sign in now"}
            </button>
          </p>
        </div>
        <img
          className=" w-full h-[100vh] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=" background_imageS"
        />
      </div>
    </>
  );
};

export default Login;
