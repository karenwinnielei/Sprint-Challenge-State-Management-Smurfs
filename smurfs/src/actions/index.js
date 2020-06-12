import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_START });

  axios
    .get(`http://localhost:3333/smurfs`)
    .then((response) => {
      console.log(response.data);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: FETCH_FAILURE, payload: error.response }),
    );
};

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const postSmurfs = (smurf) => (dispatch) => {
  dispatch({ type: POST_START });

  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then((response) => {
      console.log(response.data);
      dispatch({ type: POST_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: POST_FAILURE, payload: error.response }),
    );
};

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const deleteSmurfs = (id) => (dispatch) => {
  dispatch({ type: DELETE_START, id: id });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`, {id: id})
    .then((response) => {
      console.log(response.data);
      dispatch({ type: DELETE_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: DELETE_FAILURE, payload: error.response }),
    );
};
