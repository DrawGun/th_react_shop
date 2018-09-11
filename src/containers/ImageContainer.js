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
