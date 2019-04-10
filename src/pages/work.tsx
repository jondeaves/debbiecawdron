import React from 'react';

import useAllProjects from '../hooks/useAllProjects';

import Container from '../components/shared/Container';
import Layout from '../components/shared/Layout';
import ProjectList from '../components/shared/ProjectList';
import SEO from '../components/shared/Seo';

export const WorkPage: React.FunctionComponent = () => {
  const projects = useAllProjects();

  return (
    <Layout>
      <SEO template="Work | %s" />

      <Container type="section">
        <ProjectList projects={projects} />
      </Container>
    </Layout>
  );
};

export default WorkPage;
