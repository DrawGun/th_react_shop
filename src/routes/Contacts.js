import ContactsContainer from '../containers/ContactsContainer';

import { contactsPath } from '../helpers/routes/common';

const Contacts = {
  exact: true,
  strict: true,
  path: contactsPath(),
  component: ContactsContainer
};

export default Contacts;
