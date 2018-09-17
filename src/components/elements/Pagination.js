import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { times, ceil } from 'lodash';
import { Pagination as BootstrapPagination, PaginationItem, PaginationLink, Row } from 'reactstrap';

class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  newStep() {

  }

  render() {
    const { maxProducts, step, page, fetchProducts } = this.props;
    const maxPage = ceil(maxProducts / step);
    console.log(maxPage);
    return (
      <Row>
        <BootstrapPagination className='mx-auto'>
          {
            page != 1 && (
              <PaginationItem>
                <PaginationLink previous onClick={() => fetchProducts(page - 1)} />
              </PaginationItem>
            )
          }
          {
            times(maxPage, (step) => {
              const stepByCount = step + 1;
              
              return (
                <PaginationItem key={stepByCount} active={stepByCount === page}>
                  <PaginationLink onClick={() => fetchProducts(stepByCount)}>
                    {stepByCount}
                  </PaginationLink>
                </PaginationItem>
              );
            })
          }
          {
            page != maxPage && (
              <PaginationItem>
                <PaginationLink next={page != maxPage} onClick={() => fetchProducts(page + 1)} />
              </PaginationItem>
            )
          }
        </BootstrapPagination>
      </Row>
    );
  }
}

Pagination.propTypes = {
  items: PropTypes.array,
  maxProducts: PropTypes.number,
  step: PropTypes.number
};

export default Pagination;
