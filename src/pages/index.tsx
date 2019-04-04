import React from 'react';

import Layout from '../components/shared/Layout';
import SEO from '../components/shared/Seo';

export const IndexPage: React.FunctionComponent<{}> = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
);

export default IndexPage;
