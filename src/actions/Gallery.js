import request from 'superagent';
import { camelizeKeys } from 'humps';

import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from '~/src/constants/actionTypes';

import { API_V1_PATH } from '~/src/helpers/routes/api';
import jsonapi from 'jsonapi-parse';

const requestImages = () => ({
  type: FETCH_IMAGES_REQUEST
});

const errorImages = () => ({
  type: FETCH_IMAGES_ERROR
});

const receiveImages = (response) => ({
  type: FETCH_IMAGES_SUCCESS,
  response
});

export function fetchImages() {
  return (dispatch) => {
    dispatch(requestImages());

    const imagesUrl = `${API_V1_PATH}/gallery`;
    return request
      .get(imagesUrl)
      .end((err, { body }) => {
        const { data } = jsonapi.parse(body);
        const images = camelizeKeys(data);

        err ?
          dispatch(errorImages()) :
          dispatch(receiveImages(images));
      });
  };
}

export function fetchImagesById(id) {
  return (dispatch) => {
    dispatch(requestImages());

    const imagesUrl = `${API_V1_PATH}/products/${id}/gallery`;
    return request
      .get(imagesUrl)
      .end((err, { body }) => {
        const { data } = jsonapi.parse(body);
        const images = camelizeKeys(data);

        err ?
          dispatch(errorImages()) :
          dispatch(receiveImages(images));
      });
  };
}
