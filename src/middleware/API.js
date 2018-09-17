import request from 'superagent';
import { stringify } from 'qs';
import { camelizeKeys } from 'humps';
import { assign } from 'lodash';

import jsonapi from 'jsonapi-parse';

import { API_V1_PATH } from '~/src/helpers/routes/api';
export const API_CALL = 'API_CALL';

const APICall = (root = API_V1_PATH, endpoint, method, query, payload) => {

  let r = request[method.toLowerCase()](`${root}${endpoint}`);

  if (query)
    r = r.query(stringify(query));
  
  if (payload)
    r = r.send(payload);
  
  return r;
};

export default store => next => action => {
  if (!action[API_CALL]) {
    next(action);
    return;
  }

  const {
    root,
    endpoint,
    method,
    types,
    query,
    payload
  } = action[API_CALL];

  const [requestType, successType, errorType] = types;

  const nextAction = (action, data) => (
    assign({}, action, data, { [API_CALL]: undefined })
  );

  store.dispatch(nextAction(action, { type: requestType }));

  const promise = APICall(
    root,
    endpoint,
    method,
    query,
    payload
  );

  promise.then((response) => {
    const { data } = jsonapi.parse(response.body);

    const res = {
      body: camelizeKeys(data),
      headers: response.headers,
      query
    };
    console.log(res, response);
    store.dispatch(nextAction(action, { 
      type: successType, 
      response: res
    }));
  })
  .catch((error) => {
    store.dispatch(nextAction(action, { type: errorType, error }));
  })

  return promise;
}