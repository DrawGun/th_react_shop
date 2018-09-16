import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Card, CardImg, CardBody } from 'reactstrap';
import { map, isEmpty } from 'lodash';
import classNames from 'classnames';

import { commonUrl } from '~/src/helpers/routes/api';
import { imagePath } from '~/src/helpers/routes/common';
import Link from '~/src/components/elements/Link';
import Button from '~/src/components/elements/Button';
import PreviewImage from './PreviewImage';
import timer from '~/src/decorators/timer';

import renderSpinner from '~/src/helpers/Spinner';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 }
  }

  componentDidMount() {
    const { fetchImages, fetchImagesById } = this.props;
    const { id } = this.props.match.params;
    
    if (id) {
      fetchImagesById(id);
    } else {
      fetchImages()
    }
  }

  componentWillReceiveProps(nextProps) {
    const step = 3;
    const { secondsPassed } = this.props;
    if (secondsPassed % step === 0) {
      this.goNext();
    }
  }

  goBack() {
    const { items: images } = this.props;
    const imagesLength = images.length;
    let { activeIndex } = this.state;
    
    activeIndex -= 1;
    
    if (activeIndex < 0) {
      activeIndex = imagesLength - 1;
    }

    this.setActiveIndex(activeIndex);
  }

  goNext() {
    const { items: images } = this.props;
    const imagesLength = images.length;
    let { activeIndex } = this.state;

    activeIndex += 1;

    if (activeIndex >= imagesLength) {
      activeIndex = 0;
    }

    this.setActiveIndex(activeIndex);
  }

  setActiveIndex(activeIndex) {
    this.setState({ activeIndex })
  }

  renderGallery() {
    const { items: images, cardWidth, isModal } = this.props;
    
    if (isEmpty(images)) { return null; }
    
    const { activeIndex } = this.state; 
    const { id, mainUrl } = images[activeIndex];
    const classes = classNames({
      'mx-auto': true,
      'gallery': true,
      'is-modal': isModal
    });
    
    return (
      <Card className={classes}>
        <Link to={imagePath(id)}>
          <CardImg top src={commonUrl(mainUrl)} width={cardWidth}/>
        </Link>
        <CardBody className="mx-auto">
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <Button onClick={() => this.goBack()}>
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
              <Button onClick={() => this.goNext('increment')}>
                {'+'}
              </Button>
            </li>
          </ul>
        </CardBody>
      </Card>
    );
  }

  render() {
    const { isFetching } = this.props;

    return (
      <Row className='mb-2 mt-5'>
        { isFetching ? renderSpinner() : this.renderGallery() }
      </Row>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array,
  cardWidth: PropTypes.string,
  secondsPassed: PropTypes.number
};

Gallery.defaultProps = {
  images: [],
  cardWidth: "100%",
  secondsPassed: 0
};

export default timer(Gallery);
