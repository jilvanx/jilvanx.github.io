import React, { useState, useContext } from 'react';

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Code, Sun, Moon } from 'react-feather';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import cv from '../../static/CV_Jilvan_Candido.pdf';

const Button = styled.div`
  border: 0;
  background-color: transparent;

  &:active {
    border: 0;
    background-color: transparent;
    outline:none;
    padding:0;
  }

  &:focus {
    border: 0;
    background-color: transparent;
    outline:none;
    padding:0;
  }
`;

const SiteTitle = styled.span`
  margin: 0 5px;
`;

const Icons = styled.div`
  cursor: pointer;
  padding: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

function Header({ siteTitle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burguerClass = isMenuOpen ? 'is-active' : '';
  const [isDarkTheme, SetIsDarkTheme] = useState(true);

  const themeContext = useContext(ThemeManagerContext);

  function handleTheme() {
    SetIsDarkTheme(!isDarkTheme);
    themeContext.toggleDark();
  }

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item is-size-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <SiteTitle>
                {siteTitle}
              </SiteTitle>
              <Code size={30} />
            </Link>

            <Button
              className={`navbar-burger burger ${burguerClass}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </Button>

          </div>

          <div className={`navbar-menu ${burguerClass}`}>
            <div className="navbar-end">
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
                href={cv}
                className="navbar-item is-size-5"
                onClick={() => setIsMenuOpen(false)}
              >
                My Resume
              </a>
              <Icons>
                <Sun className={isDarkTheme ? 'is-hidden' : ''} onClick={handleTheme} />
                <Moon className={isDarkTheme ? '' : 'is-hidden'} onClick={handleTheme} />
              </Icons>
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
