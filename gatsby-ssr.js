import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'emotion-theming';
import GlobalStateProvider from './src/store/GlobalStateProvider';
import { theme } from './src/theme/theme';

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </GlobalStateProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
