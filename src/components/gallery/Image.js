import React, { Component, Fragment } from 'react';

import { isNil } from 'lodash';

import ImageEl from '~/src/components/elements/Image'
import renderSpinner from '~/src/helpers/Spinner';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchImage } = this.props;
    const { id } = this.props.match.params;
    
    if (id) {
      fetchImage(id);
    }
  }

  renderImage() {
    const { item: image } = this.props;

    if (isNil(image)) return null;

    return (
      <ImageEl path={image.mainUrl} />
    );
  }

  render() {
    const { isFetching } = this.props;

    return (
      <Fragment>
        { isFetching ? renderSpinner() : this.renderImage() }
      </Fragment>
    );
  }
}

export default Image;
