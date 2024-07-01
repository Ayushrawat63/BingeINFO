import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Body from "./Body";
import Browse from "./Browse";

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
      path: "/browser",
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
