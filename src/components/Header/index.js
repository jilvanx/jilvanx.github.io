import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';

import { Terminal, Sun, Moon } from 'react-feather';
import Context from '../../store/context';

import curriculum from '../../assets/CV_Jilvan_Candido.pdf';

function Header({ siteTitle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { state, dispatch } = useContext(Context);

  return (
    <header>
      <nav
        className={`navbar has-shadow ${state.isDark ? 'is-dark' : 'is-light'}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item is-size-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Terminal size={28} />
              <span>
                <strong>{siteTitle}</strong>
              </span>

            </Link>

            <div
              aria-hidden
              className={`navbar-burger burger ${isMenuOpen ? 'is-active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>

          </div>

          <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
            <div className="navbar-end is-dark has-text-centered">
              <Link
                to="/"
                className="navbar-item is-size-5"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/stack"
                className="navbar-item is-size-5"
                onClick={() => setIsMenuOpen(false)}
              >
                Stack
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={curriculum}
                className="navbar-item is-size-5"
                onClick={() => setIsMenuOpen(false)}
              >
                My Resume
              </a>
              <div
                aria-hidden
                className="navbar-item is-size-5"
                onClick={() => { dispatch({ type: 'TOGGLE_DARK_MODE' }); setIsMenuOpen(!isMenuOpen); }}
                css={css`
                  cursor: pointer;
                  :hover {
                    -webkit-transform: scale(1.25, 1.25);
                    transform: scale(1.25, 1.25);
                  }
                `}
              >
                <Sun
                  className={state.isDark ? '' : 'is-hidden'}
                />
                <Moon
                  className={state.isDark ? 'is-hidden' : ''}
                />

              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
