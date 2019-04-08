import React from 'react';

import useFeaturedProjects from '../hooks/useFeaturedProjects';

import Container from '../components/shared/Container';
import Layout from '../components/shared/Layout';
import ProjectList from '../components/shared/ProjectList';
import SEO from '../components/shared/Seo';

export const IndexPage: React.FunctionComponent<{}> = () => {
  const projects = useFeaturedProjects();

  return (
    <Layout>
      <SEO title="Home" />

      <Container type="section">
        <ProjectList projects={projects} />
      </Container>
    </Layout>
  );
};

export default IndexPage;
