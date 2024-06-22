import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Body from "./Body";
import Browse from "./Browse";
import SignUp from "./SignUp";

const HomePage = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default HomePage;
