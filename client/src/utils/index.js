import axios from "axios";

export const makeAPICall = (apiData) => {
  let {
    url,
    dispatch,
    defaultAction,
    successAction,
    failedAction,
    type,
    callback,
    errCallback,
    callbackData,
    extraData,
    params,
  } = apiData;

  if (!url) {
    dispatch({
      type: null,
      payload: null,
    });
    return Promise.reject();
  }

  let apiObj = {
    method: type ? type : "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (defaultAction) {
    dispatch({
      type: defaultAction,
      payload: null,
    });
  }

  if (type === "GET") {
  } else {
    apiObj.data = JSON.stringify(params);
    apiObj.method = "POST";
  }
  apiObj.url = url;
  // console.log(apiObj);

  return axios(apiObj)
    .then((response) => {
      try {
        response = response.data;
        if (response.code === 6) {
          if (successAction) {
            dispatch({
              type: successAction,
              payload: response,
              data: params,
              params,
              callbackData,
              extraData,
            });
          }
          if (callback) {
            callback(response, params);
          }
        } else {
          if (failedAction) {
            dispatch({
              type: failedAction,
              payload: [],
              data: params,
              error: response.message,
              extraData,
            });
          }
          if (errCallback) {
            errCallback(response.message, params);
          }
        }
      } catch (e) {
        if (failedAction) {
          dispatch({
            type: failedAction,
            payload: [],
            data: params,
            error: e,
            extraData,
          });
        }
      }
    })
    .catch((e) => {
      if (errCallback) {
        errCallback("internal server error.");
      }
      dispatch({
        type: failedAction,
        payload: [],
        data: params,
        extraData,
      });
    })
    .then((response) => {});
};

export const login = () => {
  localStorage.setItem("login", true);
};

export const logout = () => {
  localStorage.removeItem("login");
};

export const isLogin = () => {
  if (localStorage.getItem("login")) {
    return true;
  }
  return false;
};

export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
