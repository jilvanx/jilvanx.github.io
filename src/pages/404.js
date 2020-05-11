import React, { useContext } from 'react';

import Layout from '../components/Layout';
import Title from '../components/Title';
import SEO from '../components/SEO';

import Context from '../store/context';

const NotFoundPage = () => {
  const { state } = useContext(Context);

  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="section">
        <Title>NOT FOUND</Title>
        <p className={`subtitle has-text-centered ${state.isDark ? 'has-text-light' : 'has-text-dark'}`}>
          You just hit a route that doesn&#39;t exist... the sadness.
          {' '}
          <span role="img" aria-label="confused">
            😕
          </span>
        </p>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
