import React from "react";
import RegisterView from "../views/RegisterView";
import { useDispatch } from "react-redux";
import { triggerAuthSignup } from "../redux/actions/authAction";
import { validateEmail } from "../utils";
import { useHistory } from "react-router-dom";
const RegisterContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const obj = {
      email: data.get("email"),
      password: data.get("password"),
      firstname: data.get("firstName"),
      lastname: data.get("lastName"),
      age: data.get("age"),
    };
    if (
      obj.email !== "" &&
      obj.firstname !== "" &&
      obj.lastname !== "" &&
      obj.password !== ""
    ) {
      if (validateEmail(obj.email)) {
        dispatch(
          triggerAuthSignup(
            obj,
            (res, params) => {
              history.push("/");
            },
            (e) => {
              console.log(e);
            }
          )
        );
      } else {
        alert("Invalid Email");
      }
    } else {
      alert("Please fill required inputes");
    }
  };
  return <RegisterView handleSubmit={handleSubmit} />;
};

export default RegisterContainer;
