import request from 'superagent';
import { camelizeKeys } from 'humps';

import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_ERROR
} from '~/src/constants/actionTypes';

import { API_V1_PATH, API_IMAGES_PATH } from '~/src/helpers/routes/api';
import jsonapi from 'jsonapi-parse';

const requestImage = () => ({
  type: FETCH_IMAGE_REQUEST
});

const errorImage = () => ({
  type: FETCH_IMAGE_ERROR
});

const reciveImage = (response) => ({
  type: FETCH_IMAGE_SUCCESS,
  response
});

export function fetchImage(id) {
  return (dispatch) => {
    dispatch(requestImage());

    const imagesUrl = `${API_V1_PATH}${API_IMAGES_PATH}/${id}`;
    return request
      .get(imagesUrl)
      .end((err, { body }) => {
        const { data } = jsonapi.parse(body);
        const image = camelizeKeys(data);

        err ?
          dispatch(errorImage()) :
          dispatch(reciveImage(image));
      });
  };
}
