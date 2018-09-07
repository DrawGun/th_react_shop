import ImageContainer from '~/src/containers/ImageContainer';

import { imagePath } from '~/src/helpers/routes/common';

const Image = {
  exact: true,
  strict: true,
  path: imagePath(),
  component: ImageContainer
};

export default Image;
