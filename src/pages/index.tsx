import React from 'react';

import useFeaturedProjects from '../hooks/useFeaturedProjects';

import Layout from '../components/shared/Layout';
import ProjectList from '../components/shared/ProjectList';
import SEO from '../components/shared/Seo';
import Summary from '../components/shared/Summary';

export const IndexPage: React.FunctionComponent = () => {
  const projects = useFeaturedProjects();

  return (
    <Layout isHomepage={true}>
      <SEO template="%s" />

      <Summary />
      <ProjectList projects={projects} showMore={true} />
    </Layout>
  );
};

export default IndexPage;
