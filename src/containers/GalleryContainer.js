import { connect } from 'react-redux';

import { fetchImages, fetchImagesById } from '~/src/actions/Gallery';

import Gallery from '~/src/components/gallery/Gallery';

const stateToProps = (state) => ({
  items: state.gallery.entries,
  isFetching: state.gallery.isFetching,
  error: state.gallery.error
});

const actionsToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImages()),
  fetchImagesById: (id) => dispatch(fetchImagesById(id))
});

export default connect(stateToProps, actionsToProps)(Gallery);

