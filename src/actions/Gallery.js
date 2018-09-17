import { API_CALL } from '~/src/middleware/API';
import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from '~/src/constants/actionTypes';

export const fetchImages = () => ({
  [API_CALL]: {
    endpoint: '/gallery',
    method: 'GET',
    types: [
      FETCH_IMAGES_REQUEST,
      FETCH_IMAGES_SUCCESS,
      FETCH_IMAGES_ERROR
    ]
  }
});

export const fetchImagesById = (id) => ({
  [API_CALL]: {
    endpoint: `/products/${id}/gallery`,
    method: 'GET',
    types: [
      FETCH_IMAGES_REQUEST,
      FETCH_IMAGES_SUCCESS,
      FETCH_IMAGES_ERROR
    ]
  }
});
