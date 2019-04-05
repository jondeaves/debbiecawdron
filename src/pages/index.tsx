import React from 'react';

import Layout from '../components/shared/Layout';
import SEO from '../components/shared/Seo';

export const IndexPage: React.FunctionComponent<{}> = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>Hello, World</p>
  </Layout>
);

export default IndexPage;
