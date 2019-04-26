import React from 'react';

import useAllProjects from '../hooks/useAllProjects';

import Layout from '../components/shared/Layout';
import ProjectList from '../components/shared/ProjectList';
import SEO from '../components/shared/Seo';

export const WorkPage: React.FunctionComponent = () => {
  const projects = useAllProjects();

  return (
    <Layout>
      <SEO template="Work | %s" />

      <ProjectList projects={projects} />
    </Layout>
  );
};

export default WorkPage;
