import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import MainLayout from "./components/layouts/MainLayout";
import { productInputs, userInputs } from "./formInputs";
import './style/dark.scss'
import { useContext } from "react";
import { datkModeContext } from "./context/dark-mode-context";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <List />,
          },
          {
            path: ":userId",
            element: <Single />,
          },
          {
            path: "new",
            element: <New  inputs={userInputs} title="Add New User" />,
          },
        ],
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <List />,
          },
          {
            path: ":productId",
            element: <Single />,
          },
          {
            path: "new",
            element: <New  inputs={productInputs} title="Add New Product" />,
          },
        ],
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
]);

function App() {

  const ctx = useContext(datkModeContext);
  console.log(ctx);
  return (


    <div className={`app ${ctx.darkMode ? 'dark' : ''}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
