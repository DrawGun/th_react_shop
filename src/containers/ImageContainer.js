import { connect } from 'react-redux';

import Image from '~/src/components/gallery/Image'

const stateToProps = (state) => ({
  item: state.image.entry,
  isFetching: state.image.isFetching,
  error: state.image.error
});

export default connect(stateToProps)(Image);
