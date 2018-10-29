import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from '../../ui/Input';
import * as actions from '../../redux/actions/chars';

const SearchBox = ({ searchValue, search }) => (
  <Input
    value={searchValue}
    type="text"
    onChange={e => search(e.target.value)}
    placeholder="Search..."
  />
);

SearchBox.propTypes = {
  search: PropTypes.func,
  searchValue: PropTypes.string,
};

export default connect(
  state => ({
    searchValue: state.chars.searchValue,
  }),
  dispatch => ({
    search: value => dispatch(actions.search(value)),
  })
)(SearchBox);
