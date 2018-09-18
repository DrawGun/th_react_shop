import { connect } from 'react-redux';

import { setLanguage } from '~/src/actions/Language';

import LanguageDropdown from '~/src/components/layouts/LanguageDropdown';

const actionsToProps = (dispatch, ownProps) => ({
  setLanguage: (language) => dispatch(setLanguage(language))
});

export default connect(null, actionsToProps)(LanguageDropdown);
