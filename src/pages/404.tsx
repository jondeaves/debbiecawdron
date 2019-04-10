import React from 'react';

import Container from '../components/shared/Container';
import Layout from '../components/shared/Layout';
import Link from '../components/shared/Link';
import SEO from '../components/shared/Seo';

export const NotFoundPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO template="Not found | %s" />

      <Container alignment="center" flow="column" type="section">
        <h1>Page not Found</h1>
        <p>
          That page doesn't exist, why not{' '}
          <Link to="/work" label="checkout some of my work" />
        </p>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
