import React, { useEffect } from "react";
import CreateTaskView from "../views/CreateTaskView";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { triggerCreateTask } from "../redux/actions/taskAction";

const CreateTask = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const { handledClickType } = useSelector((state) => state.taskReducer);
  // console.log("handledClickType", handledClickType);
  const { login } = useSelector((state) => state.authReducer);
  console.log("login create task", login);
  const [priority, setPriority] = React.useState("Low");
  const [status, setStatus] = React.useState("Incomplete");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // title, desc, deadline, priority, status, creatorId
    const obj = {
      title: data.get("heading"),
      desc: data.get("description"),
      deadline: data.get("deadline"),
      priority: priority,
      creatorId: login.data.data.id,
    };

    if (obj.title !== "" || obj.desc !== "" || obj.deadline !== "") {
      dispatch(
        triggerCreateTask(obj, () => {
          history.push("/");
        })
      );
    } else {
      alert("All Fields Are Mandatory");
    }
  };

  return (
    <CreateTaskView
      handleSubmit={handleSubmit}
      priority={priority}
      setPriority={setPriority}
      status={status}
      setStatus={setStatus}
    />
  );
};

export default CreateTask;
