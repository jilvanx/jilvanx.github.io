import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section">
      <h1 className="title has-text-centered">NOT FOUND</h1>
      <hr />
      <p className="has-text-centered">
        You just hit a route that doesn&#39;t exist... the sadness.
        {' '}
        <span role="img" aria-label="confused">
          😕
        </span>
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;
