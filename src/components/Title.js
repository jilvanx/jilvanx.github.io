import React, { useContext } from 'react';
import PropType from 'prop-types';
import { css } from '@emotion/core';

import Context from '../store/context';

const Title = ({ children }) => {
  const { state } = useContext(Context);

  return (
    <>
      <h1 className={`title has-text-centered ${state.isDark ? 'has-text-light' : 'has-text-dark'}`}>{children}</h1>
      <hr
        css={css`
          width: 80px;
          margin: 32px auto;
        `}
      />
    </>
  );
};

Title.propTypes = {
  children: PropType.node.isRequired,
};

export default Title;
