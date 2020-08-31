import React, { useContext } from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Coffee } from 'react-feather';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Context from '../../store/context';

import '../../styles/index.scss';

import Header from '../Header';

const Layout = ({ children }) => {
  const { state } = useContext(Context);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          html, body {
            background-color:
              ${state.isDark ? theme.dark.background : theme.light.background};
          }

          a {
            transition: all 300ms ease;
            &:hover {
              color: #ffbc6b;
            }
          }

        `}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main>{children}</main>
        <footer>
          <div className={`columns is-mobile is-centered ${state.isDark ? 'has-text-light' : 'has-text-dark'}`}>
            ©
            {' '}
            {new Date().getFullYear()}
            , Built by
            {' '}
            <Link
              css={css`
                padding: 0 4px;
              `}
              to="/"
            >
              jilvanx
            </Link>
            <Coffee />
            <span
              css={css`
                margin: 0 4px;
              `}
            >
              with
            </span>
            <a
              href="https://www.gatsbyjs.org"
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <span>
                Gatsby
              </span>
              <img
                css={css`
                  margin-left: 4px;
                `}
                src="https://www.gatsbyjs.com/Gatsby-Monogram.svg"
                alt="Gatsby"
                width={24}
              />

            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
