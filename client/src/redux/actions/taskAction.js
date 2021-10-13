import {
  TRIGGER_CREATE_TASK,
  TRIGGER_CREATE_TASK_SUCCESS,
  TRIGGER_CREATE_TASK_FAILED,
  TRIGGER_CREATE_TYPE_BUTTON,
  GET_ALL_TASK,
  GET_ALL_TASK_SUCCESS,
  GET_ALL_TASK_FAILED,
} from "./actionTypes";
import { makeAPICall } from "../../utils";
import config from "../../utils/config";

export function triggerCreateTask(obj, callback, errCallback) {
  return (dispatch) => {
    const params = {
      url: `${config.apiBasePath}${config.createTask}`,
      dispatch,
      defaultAction: TRIGGER_CREATE_TASK,
      successAction: TRIGGER_CREATE_TASK_SUCCESS,
      failedAction: TRIGGER_CREATE_TASK_FAILED,
      type: "POST",
      headers: {},
      params: obj,
      callback,
      errCallback: errCallback,
    };
    makeAPICall(params);
  };
}

export function getAllTasks(id, callback, errCallback) {
  return (dispatch) => {
    const params = {
      url: `${config.apiBasePath}${config.getAllTask}/${id}`,
      dispatch,
      defaultAction: GET_ALL_TASK,
      successAction: GET_ALL_TASK_SUCCESS,
      failedAction: GET_ALL_TASK_FAILED,
      type: "GET",
      headers: {},
      // params: obj,
      callback,
      errCallback: errCallback,
    };
    makeAPICall(params);
  };
}

// export function triggerAuthSignup(obj, callback, errCallback) {
//   return (dispatch) => {
//     const params = {
//       url: `${config.apiBasePath}${config.signup}`,
//       dispatch,
//       defaultAction: TRIGGER_SIGN_UP,
//       successAction: TRIGGER_SIGN_UP_SUCCESS,
//       failedAction: TRIGGER_SIGN_UP_FAILED,
//       type: "POST",
//       headers: {},
//       params: obj,
//       callback,
//       errCallback: errCallback,
//     };
//     makeAPICall(params);
//   };
// }

export function triggerCreateTaskButton(payload) {
  return {
    type: TRIGGER_CREATE_TYPE_BUTTON,
    payload: payload,
  };
}
