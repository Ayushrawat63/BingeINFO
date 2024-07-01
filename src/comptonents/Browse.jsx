

import { useSelector } from "react-redux";
import Header from "./Header";


const Browse = () => {
  const userInfo=useSelector((store)=>store.user)
  return (
    <>
    <Header btn={false}/>  
      {userInfo && < div className="mt-16 text-black border-2 border-red-600 z-50">
         <h1>{userInfo.email}</h1>
         <h1>{userInfo.displayName}</h1>

      </div>}
    </>
  );
};

export default Browse;
