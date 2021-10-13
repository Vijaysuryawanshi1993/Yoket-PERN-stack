import React, { useEffect } from "react";
import HomeView from "../views/HomeView";
import { triggerLogout } from "../redux/actions/authAction";
import { useHistory } from "react-router-dom";
import {
  triggerCreateTaskButton,
  getAllTasks,
} from "../redux/actions/taskAction";
import { useDispatch, useSelector } from "react-redux";
const HomeContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { login } = useSelector((state) => state.authReducer);
  console.log("login", login);

  const handleLogout = () => {
    history.push("/login");
    dispatch(triggerLogout());
  };

  const handleAddTask = () => {
    dispatch(triggerCreateTaskButton("add"));
    history.push("/create-task");
  };

  const onTaskClick = (data) => {
    dispatch(triggerCreateTaskButton(data));
    history.push("/create-task");
  };

  const getAll = () => {
    dispatch(getAllTasks(login.data.data.id));
  };
  useEffect(() => {
    getAll();
  }, []);
  // getAllTasks;
  return (
    <HomeView
      handleAddTask={handleAddTask}
      handleLogout={handleLogout}
      onTaskClick={onTaskClick}
    />
  );
};

export default HomeContainer;
