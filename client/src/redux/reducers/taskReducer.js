import {
  TRIGGER_CREATE_TASK,
  TRIGGER_CREATE_TASK_SUCCESS,
  TRIGGER_CREATE_TASK_FAILED,
  TRIGGER_CREATE_TYPE_BUTTON,
  GET_ALL_TASK,
  GET_ALL_TASK_SUCCESS,
  GET_ALL_TASK_FAILED,
} from "../actions/actionTypes";

const initialState = {
  createTask: {
    loading: false,
    data: null,
    error: null,
  },

  getAllTask: {
    loading: false,
    data: null,
    error: null,
  },

  handledClickType: "",
};

const TaskReducer = function (state = initialState, action) {
  switch (action.type) {
    case TRIGGER_CREATE_TASK:
      return {
        ...state,
        createTask: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case TRIGGER_CREATE_TASK_SUCCESS:
      return {
        ...state,
        createTask: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case TRIGGER_CREATE_TASK_FAILED:
      return {
        ...state,
        createTask: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case GET_ALL_TASK:
      return {
        ...state,
        getAllTask: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_ALL_TASK_SUCCESS:
      return {
        ...state,
        getAllTask: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case GET_ALL_TASK_FAILED:
      return {
        ...state,
        getAllTask: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case TRIGGER_CREATE_TYPE_BUTTON:
      return {
        ...state,
        handledClickType: action.payload,
      };
    // return state;
    default:
      return state;
  }
};

export default TaskReducer;
