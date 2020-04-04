import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  GitHub, Twitter, Linkedin, Mail,
} from 'react-feather';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import personal from '../utils/personal';

const Photo = styled.figure`
  margin: 48px auto 24px;
  text-align: center;
`;

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <Photo className="image">
      <StaticQuery
        query={graphql`
            query {
              file(relativePath: { eq: "jilvan.png" }) {
                childImageSharp {
                  fixed(width: 140) {
                    ...GatsbyImageSharpFixed
                  }

                }
              }
            }
          `}
        render={(data) => (
          <Img
            fixed={data.file.childImageSharp.fixed}
            imgStyle={{ borderRadius: '20%' }}
            alt={personal.name}
          />
        )}
      />
    </Photo>

    <h1 className="title has-text-centered has-text-light">{personal.name}</h1>
    <h2 className="subtitle has-text-centered has-text-warning">{personal.position}</h2>
    <div className="columns is-mobile is-centered">
      <div className="column is-narrow has-text-centered">
        <a href="https://www.linkedin.com/in/jilvanx/" arial-label="linkedin">
          <Linkedin size="30" />
        </a>
      </div>
      <div className="column is-narrow has-text-centered">
        <a href="http://github.com/jilvanx" arial-label="github">
          <GitHub size="30" />
        </a>
      </div>
      <div className="column is-narrow has-text-centered">
        <a href="http://twitter.com/jilvanx" arial-label="twitter">
          <Twitter size="30" />
        </a>
      </div>
      <div className="column is-narrow has-text-centered">
        <a href="mailto:jilvan.silva@gmail.com" arial-label="e-mail">
          <Mail size="30" />
        </a>
      </div>
    </div>

    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title has-text-light">
        Hello, I'm
        {' '}
        {personal.name}
        {' '}
        <span role="img" aria-label="wave">
          👋
        </span>
      </h4>
      <p>
        {personal.aboutme}
      </p>
    </section>
  </Layout>
);

export default IndexPage;
