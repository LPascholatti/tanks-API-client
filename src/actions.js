import request from "superagent";

export const baseUrl = "https://tanks-api.herokuapp.com";

export const TANKS_FETCH = "TANKS_FETCH";

const tanksFetch = tanks => ({
  type: TANKS_FETCH,
  payload: tanks
});

export const getTanks = () => (dispatch, getState) => {
  const state = getState();
  const { tanks } = state;

  if (!tanks.length) {
    request(`${baseUrl}/tanks`)
      .then(response => {
        const actionTanksFetch = tanksFetch(response.body);
        dispatch(actionTanksFetch);
      })
      .catch(console.error);
  }
};
