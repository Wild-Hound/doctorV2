import * as actions from "./ActionTypes";

// @ts-ignore
export const Reducer = (state = [], action) => {
  switch (action.type) {
    case actions.addDoctors:
      return {
        doctors: action.payload.doctors,
      };
    default:
      return state;
  }
};
