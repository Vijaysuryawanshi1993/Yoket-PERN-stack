import {
  TRIGGER_LOGIN,
  TRIGGER_LOGIN_SUCCESS,
  TRIGGER_LOGIN_FAILED,
  TRIGGER_SIGN_UP,
  TRIGGER_SIGN_UP_SUCCESS,
  TRIGGER_SIGN_UP_FAILED,
  TRIGGER_LOGOUT,
} from "./actionTypes";
import { makeAPICall } from "../../utils";
import config from "../../utils/config";

export function triggerAuthLogin(obj, callback, errCallback) {
  return (dispatch) => {
    const params = {
      url: `${config.apiBasePath}${config.login}`,
      dispatch,
      defaultAction: TRIGGER_LOGIN,
      successAction: TRIGGER_LOGIN_SUCCESS,
      failedAction: TRIGGER_LOGIN_FAILED,
      type: "POST",
      headers: {},
      params: obj,
      callback,
      errCallback: errCallback,
    };
    makeAPICall(params);
  };
}

export function triggerAuthSignup(obj, callback, errCallback) {
  return (dispatch) => {
    const params = {
      url: `${config.apiBasePath}${config.signup}`,
      dispatch,
      defaultAction: TRIGGER_SIGN_UP,
      successAction: TRIGGER_SIGN_UP_SUCCESS,
      failedAction: TRIGGER_SIGN_UP_FAILED,
      type: "POST",
      headers: {},
      params: obj,
      callback,
      errCallback: errCallback,
    };
    makeAPICall(params);
  };
}

export function triggerLogout() {
  return {
    type: TRIGGER_LOGOUT,
  };
}
