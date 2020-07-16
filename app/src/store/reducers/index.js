import { FETCH_ROCKETS_START } from "../actions";
import { FETCH_ROCKETS_SUCCESS } from "../actions";

const initialState = {
  isLoading: false,
  rockets: [],
  error: "",
};

// In the UI, we check to see if we're loading data, have an error, or if we have data

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rockets: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
