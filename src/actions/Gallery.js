import request from 'superagent';
import { camelizeKeys } from 'humps';

import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from '~/src/constants/actionTypes';

import { API_V1_PATH, API_PRODUCTS_PATH, API_GALLERY_PATH } from '~/src/helpers/routes/api';
import jsonapi from 'jsonapi-parse';

const requestImages = () => ({
  type: FETCH_IMAGES_REQUEST
});

const errorImages = () => ({
  type: FETCH_IMAGES_ERROR
});

const reciveImages = (response) => ({
  type: FETCH_IMAGES_SUCCESS,
  response
});

export function fetchImages() {
  return (dispatch) => {
    dispatch(requestImages());

    const imagesUrl = `${API_V1_PATH}${API_GALLERY_PATH}`;
    return request
      .get(imagesUrl)
      .end((err, { body }) => {
        const { data } = jsonapi.parse(body);
        const images = camelizeKeys(data);

        err ?
          dispatch(errorImages()) :
          dispatch(reciveImages(images));
      });
  };
}

export function fetchImagesById(id) {
  return (dispatch) => {
    dispatch(requestImages());

    const imagesUrl = `${API_V1_PATH}${API_PRODUCTS_PATH}/${id}${API_GALLERY_PATH}`;
    return request
      .get(imagesUrl)
      .end((err, { body }) => {
        const { data } = jsonapi.parse(body);
        const images = camelizeKeys(data);

        err ?
          dispatch(errorImages()) :
          dispatch(reciveImages(images));
      });
  };
}
