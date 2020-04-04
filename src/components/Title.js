import React from 'react';

import PropType from 'prop-types';
import styled from 'styled-components';

const Hr = styled.hr`
  width: 80px;
  margin: 32px auto;
`;

const Title = ({ children }) => (
  <>
    <h1 className="title has-text-centered has-text-light">{children}</h1>
    <Hr />
  </>
);

Title.propTypes = {
  children: PropType.node.isRequired,
};

export default Title;
