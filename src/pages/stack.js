import React, { useContext } from 'react';
import Helmet from 'react-helmet';

import Title from '../components/Title';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

import Context from '../store/context';

export default function Stack() {
  const { state } = useContext(Context);

  return (
    <Layout>
      <SEO
        title="Stack"
        keywords="React, Node, Gatsby, Front-end, developer, API"
      />
      <Helmet>
        <script
          async
          src="https://cdn1.stackshare.io/javascripts/client-code.js"
          charset="utf-8"
        />
      </Helmet>
      <section className="section is-size-4-desktop is-size-5-touch">
        <Title>Stack</Title>
        <div className={`has-text-centered ${state.isDark ? 'has-text-light' : 'has-text-dark'}`}>
          <p className="content">
            I have experience with many modern tools,
            I select them for my projects depending on the usage.
          </p>
          <p className="content">Here is my stack on StackShare:</p>
          <div className="columns is-centered">
            <div className="column is-half">
              <a
                frameBorder="0"
                data-theme="light"
                data-layers="1,2,3,4"
                data-stack-embed="true"
                href="https://embed.stackshare.io/stacks/embed/60289aae9fcafd619f2be8fc0e15d6"
              >
                StackShare
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
