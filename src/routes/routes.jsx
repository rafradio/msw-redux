import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { LoginPage } from "../components/LoginPage";
import { PostsList } from "../components/PostsList";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage/>,
      children: [
      ]
    },
    {
        path: '/posts',
        element: <PostsList/>,
        children: [
        ]
    },
]);