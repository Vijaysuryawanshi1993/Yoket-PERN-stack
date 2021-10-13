import LoginContainer from "../../containers/LoginContainer";
import RegisterContainer from "../../containers/RegisterContainer";
import HomeContainer from "../../containers/HomeContainer";
import CreateTask from "../../containers/CreateTask";

const publicRoutesList = [
  {
    path: "/login",
    path_: "/login",
    restricted: true,
    private: false,
    component: LoginContainer,
    name: "login",
    group: "app entry",
    readablename: "Login",
  },
  {
    path: "/signup",
    path_: "/signup",
    restricted: true,
    private: false,
    component: RegisterContainer,
    name: "register",
    group: "app entry",
    readablename: "Register",
  },
];

const privateRoutesList = [
  {
    path: "/",
    path_: "/",
    restricted: false,
    private: false,
    component: HomeContainer,
    name: "home",
    group: "app entry",
    readablename: "home",
  },
  {
    path: "/create-task",
    path_: "/create-task",
    restricted: false,
    private: false,
    component: CreateTask,
    name: "home",
    group: "app entry",
    readablename: "home",
  },
];

export { publicRoutesList, privateRoutesList };
