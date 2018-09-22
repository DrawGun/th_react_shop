import ImageContainer from '~/src/containers/ImageContainer';

import { fetchImage } from '~/src/actions/Image';
import { imagePath } from '~/src/helpers/routes/common';

const Image = {
  exact: true,
  strict: true,
  path: imagePath(),
  component: ImageContainer,
  prepareData: (store, query, params) => {
    const { id } = params;

    return store.dispatch(fetchImage(id));
  }
};

export default Image;
