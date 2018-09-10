// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import { isNil } from 'lodash';

// import request from 'superagent';
// import { camelizeKeys } from 'humps';

// import { API_V1_PATH, API_PRODUCTS_PATH, API_IMAGES_PATH } from '~/src/helpers/routes/api';
// import jsonapi from 'jsonapi-parse';

// import Image from '~/src/components/elements/Image'

// class ImageContainer extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = { image: null };
//   }

//   componentDidMount() {
//     this.fetchImage();
//   }

//   fetchImage() {
//     const { id } = this.props.match.params;

//     const imagesUrl = `${API_V1_PATH}${API_IMAGES_PATH}/${id}`;

//     request
//       .get(imagesUrl)
//       .end((err, { body }) => {
//         const { data } = jsonapi.parse(body);

//         this.setState({
//           image: camelizeKeys(data)
//         })
//       });
//   }

//   render() {
//     const { image } = this.state;
//     if (isNil(image)) { return null; }

//     return (
//       <Image path={image.mainUrl} />
//     );
//   }
// }

// ImageContainer.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string.string,
//     }),
//   }),
// };

// export default ImageContainer;


import { connect } from 'react-redux';

import { fetchImage } from '~/src/actions/Image';

import Image from '~/src/components/gallery/Image'

const stateToProps = (state) => ({
  item: state.image.entry,
  isFetching: state.image.isFetching,
  error: state.image.error
});

const actionsToProps = (dispatch) => ({
  fetchImage: (id) => dispatch(fetchImage(id))
});

export default connect(stateToProps, actionsToProps)(Image);
