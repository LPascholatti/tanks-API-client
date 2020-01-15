import request from "superagent";

export const baseUrl = "https://tanks-api.herokuapp.com";
//export const baseUrl = "http://localhost:4000";

export const TANKS_FETCH = "TANKS_FETCH";
export const TANK_FETCH = "TANK_FETCH";

const tanksFetch = tanks => ({
  type: TANKS_FETCH,
  payload: tanks
});

const tankFetch = tank => ({
  type: TANK_FETCH,
  payload: tank
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

export const getTank = (id) => (dispatch) => {
  console.log("id", id)
  request(`${baseUrl}/tanks/${id}`)
  .then(response => {
    dispatch(tankFetch(response.body))
  })
  .catch(console.error)
};
