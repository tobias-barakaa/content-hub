import "bootstrap/dist/css/bootstrap.css";
import "./App.css"
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
  EditArticle,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {action as registerAction} from './pages/Register';
import {action as loginAction} from './pages/Login';
import {loader as dashboardLoader} from './pages/DashboardLayout';

import {loader as allArticlesLoader} from './pages/AllArticles';
import {loader as editArticleLoader} from './pages/EditArticle';
import {action as editArticleAction} from './pages/EditArticle';
import {action as deleteArticleAction} from './pages/DeleteArticle';

import {loader as adminLoader} from './pages/Admin';
import {action as profileAction} from './pages/Profile';


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
            path: 'profile',
            element: <Profile />,
            action: profileAction,
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'all-articles',
            element: <AllArticles />,
            loader: allArticlesLoader,
          },
          {
            path: 'edit-article/:id',
            element: <EditArticle />,
            loader: editArticleLoader,
            action: editArticleAction,

          },
          {
            path: 'delete-article/:id',
            action: deleteArticleAction,
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
