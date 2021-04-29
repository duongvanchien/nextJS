import { userActionTypes } from "./action";

const initialState = {
  name: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.SUBMIT_USERNAME:
      return { ...initialState, name: action.name };
    default:
      return state;
  }
}
