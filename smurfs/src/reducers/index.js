import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_START,
  POST_SUCCESS,
  POST_FAILURE,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAILURE,
} from '../actions';

const initialState = {
  smurfs: [],
  isFetching: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: true,
        error: '',
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case POST_START:
      return {
        ...state,
        smurfs: [
          ...state.smurfs
        ],
        isFetching: true,
        error: '',
      };
    case POST_SUCCESS:
      return {
        ...state,
        smurfs: [
          ...state.smurfs
        ],
        isFetching: true,
        error: '',
      };
    case POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case DELETE_START:
      return {
        ...state,
        smurfs: [
          ...state.smurfs
        ],
        isFetching: true,
        error: '',
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        smurfs: [
          ...state.smurfs
        ],
        isFetching: true,
        error: '',
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
