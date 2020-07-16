import axios from "axios";

// ACTION TYPES
export const FETCH_ROCKETS_START = "FETCH_ROCKETS_START";
export const FETCH_ROCKETS_SUCCESS = "FETCH_ROCKETS_SUCCESS";

// ACTION CREATORS
export const fetchRockets = () => {
  return (dispatch) => {
    // 1st - dispatch an isLoading action
    dispatch({ type: FETCH_ROCKETS_START });
    // 2nd - do the async operation
    axios
      .get("https://api.spacexdata.com/v3/rockets")
      .then((res) => {
        // res.data
        console.log(res.data[0], "from actions");
        dispatch({ type: FETCH_ROCKETS_SUCCESS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
