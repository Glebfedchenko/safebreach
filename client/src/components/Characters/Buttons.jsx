import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Flex } from '../../ui/Flex';
import * as actions from '../../redux/actions/chars';
import { Button } from '../../ui/Button';

const Buttons = ({ nextPage, prevPage, goToNextPage, goToPrevPage }) => (
  <Flex height="20%" flex justify="space-around" alignItems="center">
    {prevPage === null ? (
      <Button type="button" disabled>
        &#8249; Prev
      </Button>
    ) : (
      <Button type="button" onClick={() => goToPrevPage(prevPage)}>
        &#8249; Prev
      </Button>
    )}
    {nextPage === null ? (
      <Button type="button" disabled>
        Next &#8250;
      </Button>
    ) : (
      <Button type="button" onClick={() => goToNextPage(nextPage)}>
        Next &#8250;
      </Button>
    )}
  </Flex>
);

Buttons.propTypes = {
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  goToNextPage: PropTypes.func,
  goToPrevPage: PropTypes.func,
};

export default connect(
  state => ({
    nextPage: state.chars.nextPage,
    prevPage: state.chars.prevPage,
  }),
  dispatch => ({
    goToNextPage: url => dispatch(actions.goToNextPage(url)),
    goToPrevPage: url => dispatch(actions.goToPrevPage(url)),
  })
)(Buttons);
