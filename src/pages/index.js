import React, { useContext } from 'react';
import Typical from 'react-typical';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  GitHub, Twitter, Linkedin, Mail,
} from 'react-feather';

import Context from '../store/context';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => {
  const { state } = useContext(Context);

  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          author,
          name,
          position,
          aboutme
        }
      }
      file(relativePath: { eq: "jilvan.png" }) {
        childImageSharp {
          fixed(width: 128) {
            ...GatsbyImageSharpFixed
          },
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="m-t-20 m-b-10 is-centered">
        <figure className="image container is-128x128">
          <Img
            className="img-photo"
            fixed={data.file.childImageSharp.fixed}
            alt={data.site.siteMetadata.name}
          />
        </figure>
      </div>
      <h1 className={`title has-text-centered ${state.isDark ? 'has-text-light' : 'has-text-dark'}`}>{data.site.siteMetadata.name}</h1>

      <p className="subtitle has-text-centered has-text-warning has-text-weight-bold">
        I'm a Software
        {' '}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'Software Developer 💻 ',
            3000,
            'Software Engineer ⚙️ ',
            3000,
            'Full-stack developer 🛠 ',
            3000,
            'Front-end developer 🎨 ',
            3000,
          ]}
        />
      </p>


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
        <h4 className={`title ${state.isDark ? 'has-text-light' : 'has-text-dark'}`}>
          Hello, I'm
          {' '}
          {data.site.siteMetadata.name}
          {' '}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h4>
        <p className={`has-text-justified ${state.isDark ? 'has-text-light' : 'has-text-dark'}`}>
          {data.site.siteMetadata.aboutme}
        </p>
      </section>
    </Layout>
  );
};


export default IndexPage;
