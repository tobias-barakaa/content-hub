import "bootstrap/dist/css/bootstrap.css";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  Error,
  DashboardLayout,
  AddArticle,
  AllArticles,
  Profile,
  Admin,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {action as registerAction} from './pages/Register';
import {action as loginAction} from './pages/Login';
import {loader as dashboardLoader} from './pages/DashboardLayout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },

      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
    
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader:dashboardLoader,
        children: [
          {
            index: true,
            element: <AddArticle />,
          },
           {
            path: 'all-jobs',
            element: <AllArticles />,
          },

          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
          {
            path: 'all-articles',
            element: <AllArticles />,
          }
        ],
      },


    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
