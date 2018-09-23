import { connect } from 'react-redux';

import Gallery from '~/src/components/gallery/Gallery';

const stateToProps = (state, ownProps) => ({
  items: state.gallery.entries,
  isFetching: state.gallery.isFetching,
  error: state.gallery.error,
  isModal: ownProps.isModal
});

export default connect(stateToProps)(Gallery);
