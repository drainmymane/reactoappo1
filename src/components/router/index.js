import About from "../../pages/About";
import PostIdPage from "../../pages/PostIdPage";
import Main from "../../pages/Items";
import ErrorPage from "../../pages/ErrorPage";
import Login from "../../pages/Login";

export const private_routes = [
    {path: "/items", comp: Main,},
    {path: "/about", comp: About,},
    {path: "/items/:id", comp: PostIdPage, },
]

export const public_routes = [
    {path: "/login", comp: Login,},
    {path: "/error", comp: ErrorPage,},
]