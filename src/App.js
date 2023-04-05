import Home from "./pages/home/Home";
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

const router = createBrowserRouter([
  {
    path : '/',
    children : [
      {
        index : true, 
        element : <Home />
      },
      {
        path : 'login',
        element : <Login />
      },
      {
        path : 'users',
        children : [
          {
            index:true,
            element : <List />
          },
          {
            path:':userId',
            element:<Single/>
          },
          {
            path:'new',
            element:<New/>
          }
        ]
      },
      {
        path : 'products',
        children : [
          {
            index:true,
            element : <List />
          },
          {
            path:':productId',
            element:<Single/>
          },
          {
            path:'new',
            element:<New/>
          }
        ]
      }
    ]
  }
])


function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
