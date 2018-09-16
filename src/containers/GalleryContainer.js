import { connect } from 'react-redux';

import { fetchImages, fetchImagesById } from '~/src/actions/Gallery';

import Gallery from '~/src/components/gallery/Gallery';

const stateToProps = (state, ownProps) => ({
  items: state.gallery.entries,
  isFetching: state.gallery.isFetching,
  error: state.gallery.error,
  isModal: ownProps.isModal
});

const actionsToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImages()),
  fetchImagesById: (id) => dispatch(fetchImagesById(id))
});

export default connect(stateToProps, actionsToProps)(Gallery);

