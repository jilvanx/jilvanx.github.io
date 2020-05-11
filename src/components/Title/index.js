import React, { useContext } from 'react';
import PropType from 'prop-types';
import { css } from '@emotion/core';

import { useTheme } from 'emotion-theming';

import Context from '../../store/context';

const Title = ({ children }) => {
  const theme = useTheme();
  const { state } = useContext(Context);

  return (
    <>
      <div className={`title has-text-centered ${state.isDark ? 'has-text-light' : 'has-text-dark'}`}>
        <h1>{children}</h1>
        <hr
          css={css`
            width: 80px;
            margin: 32px auto;
            border: 1px solid ${state.isDark ? theme.dark.font : theme.light.font};
          `}
        />
      </div>
    </>
  );
};

Title.propTypes = {
  children: PropType.node.isRequired,
};

export default Title;
