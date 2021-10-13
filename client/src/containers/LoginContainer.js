import React from "react";
import LoginView from "../views/LoginView";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, login } from "../utils";
import { triggerAuthLogin } from "../redux/actions/authAction";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { login } = useSelector((state) => state.authReducer);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const obj = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (obj.email !== "" && obj.password !== "") {
      if (validateEmail(obj.email)) {
        dispatch(
          triggerAuthLogin(obj, () => {
            history.push("/");
          })
        );
      } else {
        alert("Invalid Email");
      }
    } else {
      alert("Please fill required inputes");
    }
  };
  return <LoginView handleSubmit={handleSubmit} />;
};

export default LoginContainer;
