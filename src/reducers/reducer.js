import {
    FETCH_IMAGE,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_FAILED
  } from '../actions/constants';
  
  const initialState = {
    loading: false,
    error: null,
    data: null
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IMAGE:
        return {
          loading: true,
          data: null,
          error: null,
        };
      case FETCH_IMAGE_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          error: null,
        };
      }
      case FETCH_IMAGE_FAILED: {
        return {
          loading: false,
          data: null,
          error: action.payload.error
        }
      }
      default:
        return state;
    }
  }