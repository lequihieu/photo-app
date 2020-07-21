import {
    FETCH_IMAGE,
    FETCH_IMAGE_FAILED,
    FETCH_IMAGE_SUCCESS
  } from './constants';
  
  import fetchImageSerivce from '../services';
  
  export const fetch = (key, page) => {
    return dispatch => {
      dispatch(fetchImage());
      fetchImageSerivce(key, page)
        .then(imageData => dispatch(fetchImageSuccess(imageData, key)))
        .catch(error => dispatch(fetchImageFailed(error)))
    }
  }
  
  const fetchImage = () => ({
    type: FETCH_IMAGE
  });
  
  const fetchImageSuccess = (imageData, key) => ({
    type: FETCH_IMAGE_SUCCESS,
    payload: {
      imageData,
      key
    }
  })
  
  const fetchImageFailed = error => ({
    type: FETCH_IMAGE_FAILED,
    payload: { error }
  })