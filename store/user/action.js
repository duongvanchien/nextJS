export const userActionTypes = {
  SUBMIT_USERNAME: "SUBMIT_USERNAME",
};

export const submitUsername = (payload) => (dispatch) => {
  console.log(payload, "name");
  return dispatch({ type: userActionTypes.SUBMIT_USERNAME, name: payload });
};
