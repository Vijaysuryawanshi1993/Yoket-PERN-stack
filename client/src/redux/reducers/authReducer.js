import {
  TRIGGER_LOGIN,
  TRIGGER_LOGIN_FAILED,
  TRIGGER_SIGN_UP,
  TRIGGER_SIGN_UP_FAILED,
  TRIGGER_SIGN_UP_SUCCESS,
  TRIGGER_LOGIN_SUCCESS,
  TRIGGER_LOGOUT,
} from "../actions/actionTypes";
import { login, logout } from "../../utils";
import { persistor } from "../store";

const initialState = {
  login: {
    loading: false,
    data: null,
    error: null,
  },
  signUp: {
    loading: false,
    data: null,
    error: null,
  },
};

const PersistedReducer = function (state = initialState, action) {
  switch (action.type) {
    case TRIGGER_LOGIN:
      return {
        ...state,
        login: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case TRIGGER_LOGIN_SUCCESS:
      console.log("login success", action.payload);
      login();
      return {
        ...state,
        login: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };

    case TRIGGER_LOGIN_FAILED:
      return {
        ...state,
        login: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case TRIGGER_SIGN_UP:
      return {
        ...state,
        signUp: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case TRIGGER_SIGN_UP_SUCCESS:
      login();
      return {
        ...state,
        signUp: {
          loading: false,
          data: action.payload,
          error: null,
        },
        login: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };

    case TRIGGER_SIGN_UP_FAILED:
      return {
        ...state,
        signUp: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case TRIGGER_LOGOUT:
      // persistor.purge();
      logout();
      return {
        ...state,
        login: {
          loading: false,
          data: null,
          error: null,
        },
        signUp: {
          loading: false,
          data: null,
          error: null,
        },
      };
    // return state;
    default:
      return state;
  }
};

export default PersistedReducer;
