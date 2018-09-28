import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <Fragment>
    <div>This is the header!</div>
    <main>{children}</main>
    <div>This is the footer!</div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
