import React from 'react';

import PropTypes from 'prop-types';

import useGlobalState from './useGlobalState';
import Context from './context';

const GlobalStateProvider = ({ children }) => (
  <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
);

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStateProvider;
