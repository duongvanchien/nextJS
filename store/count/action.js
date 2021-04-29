export const countActionTypes = {
  ADD: "ADD",
};

export const addCount = (payload) => (dispatch) => {
  return dispatch({ type: countActionTypes.ADD, payload });
};
