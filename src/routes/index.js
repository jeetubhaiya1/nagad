import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export const clientRoutes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: false,
  },
  {
    path: '/login',
    component: Login,
    exact: false,
  },
];

export const adminRoutes = [];