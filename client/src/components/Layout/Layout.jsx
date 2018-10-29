import React from 'react';
import PropTypes from 'prop-types';
import { LayoutWrapper } from '../../ui/LayoutWrapper';
import SearchBox from '../Characters/SearchBox';

export const Layout = ({ children }) => (
  <LayoutWrapper>
    <SearchBox />
    {children}
  </LayoutWrapper>
);

Layout.propTypes = { children: PropTypes.node };
