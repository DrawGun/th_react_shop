import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Card, CardImg, CardBody } from 'reactstrap';
import { map, isEmpty } from 'lodash';

import { commonUrl } from './../../helpers/routes/api';
import Button from './../elements/Button';
import PreviewImage from './PreviewImage';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 }
  }

  changeActiveIndex(type) {
    const { images } = this.props;
    const images_length = images.length;

    let { activeIndex } = this.state;
    if (type === 'increment') {
      activeIndex += 1;
    } else if (type === 'decrement') {
      activeIndex -= 1;
    }
    
    if (activeIndex < 0) {
      activeIndex = images_length - 1;
    } else if (activeIndex >= images_length) {
      activeIndex = 0;
    }

    this.setActiveIndex(activeIndex);
  }

  setActiveIndex(activeIndex) {
    this.setState({ activeIndex })
  }

  render() {
    const { images, cardWidth } = this.props;
    
    if (isEmpty(images)) { return null; }
    
    const { activeIndex } = this.state; 
    const { mainUrl } = images[activeIndex];

    return (
      <Fragment>
        <Card className="mx-auto">
        <CardImg top src={commonUrl(mainUrl)} width={cardWidth}/>
          <CardBody className="mx-auto">
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <Button onClick={() => this.changeActiveIndex('decrement')}>
                  {'-'}
                </Button>
              </li>
              {
                map(
                  images,
                  ({ thumbUrl }, index) => (
                    <li className='list-inline-item' key={`${index}`}>
                      <PreviewImage 
                        path={thumbUrl} 
                        onClick={() => this.setActiveIndex(index)}
                      />
                    </li>
                  )
                )
              }
              <li className='list-inline-item'>
                <Button onClick={() => this.changeActiveIndex('increment')}>
                  {'+'}
                </Button>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array,
  cardWidth: PropTypes.string
};

Gallery.defaultProps = {
  images: [],
  cardWidth: "100%"
};

export default Gallery;
