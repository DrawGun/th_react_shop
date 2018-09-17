import { API_CALL } from '~/src/middleware/API';
import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_ERROR
} from '~/src/constants/actionTypes';

export const fetchImage = (id) => ({
  [API_CALL]: {
    endpoint: `/images/${id}`,
    method: 'GET',
    types: [
      FETCH_IMAGE_REQUEST,
      FETCH_IMAGE_SUCCESS,
      FETCH_IMAGE_ERROR
    ]
  }
});
