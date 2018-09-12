import React, { Component } from 'react';

import { isNil } from 'lodash';

import ImageEl from '~/src/components/elements/Image'

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

  render() {
    const { item: image } = this.props;
    
    if (isNil(image)) { return null; }

    return (
      <ImageEl path={image.mainUrl} />
    );
  }
}

export default Image;
