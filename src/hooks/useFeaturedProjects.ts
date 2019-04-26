import { graphql, useStaticQuery } from 'gatsby';

import IContentfulProjects from '../types/IContentfulProjects';
import IProject from '../types/IProject';

export default (): IProject[] => {
  const {
    allContentfulProject: { edges: projects },
  }: { allContentfulProject: IContentfulProjects } = useStaticQuery(
    graphql`
      query {
        allContentfulProject(
          filter: { featured: { eq: true } }
          sort: { fields: [date], order: DESC }
          limit: 6
        ) {
          edges {
            node {
              title
              slug
              date
              excerpt
              previewImage {
                fluid(maxWidth: 315, maxHeight: 315) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    `,
  );

  return projects.map(project => ({
    ...project.node,
  }));
};
