import ContactsContainer from '~/src/containers/ContactsContainer';

import { contactsPath } from '~/src/helpers/routes/common';

const Contacts = {
  exact: true,
  strict: true,
  path: contactsPath(),
  component: ContactsContainer
};

export default Contacts;
