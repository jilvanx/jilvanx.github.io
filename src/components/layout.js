import React from 'react';

import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Coffee } from 'react-feather';
import styled, { createGlobalStyle } from 'styled-components';

import '../styles/index.scss';

import Header from './Header';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const StyledLink = styled(Link)`
  padding: 0 4px;
`;

const GlobalStyle = createGlobalStyle`
body {
  background: ${(props) => (props.theme.isDark ? '#181818' : '#ffffff')};
  color: ${(props) => (props.theme.isDark ? '#ffffff' : '#181818')};
}
html {
  background: ${(props) => (props.theme.isDark ? '#181818' : '#ffffff')};
}

nav.navbar {
  background: ${(props) => (props.theme.isDark ? '#363636' : '#d4d4d4')};
  color: ${(props) => (props.theme.isDark ? '#d4d4d4' : '#181818')};
}

nav .navbar-item, nav .navbar-brand {
  color: ${(props) => (props.theme.isDark ? '#d4d4d4' : '#181818')};
}

nav .navbar-item:hover,
nav .navbar-item:focus,
nav .navbar-brand:hover,
nav .navbar-brand:focus {
  background-color: ${(props) => (props.theme.isDark ? '#292929' : '#c7c7c7')};
  color: ${(props) => (props.theme.isDark ? '#fff' : '#181818')};
}

.has-text-light {
  color: ${(props) => (props.theme.isDark ? '#fff' : '#181818 !important')};
}

`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main>{children}</main>
        <Footer>
          ©
          {' '}
          {new Date().getFullYear()}
          , Built by
          {' '}
          <StyledLink to="/">
            jilvanx
          </StyledLink>
          {' '}
          <Coffee />
        </Footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
