import ImageContainer from '../containers/ImageContainer';

import { imagePath } from '../helpers/routes/common';

const Image = {
  exact: true,
  strict: true,
  path: imagePath(),
  component: ImageContainer
};

export default Image;
