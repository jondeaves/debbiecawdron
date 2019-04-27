import { graphql, useStaticQuery } from 'gatsby';

import IMarkdownProjects from '../types/IMarkdownProjects';
import IProjectCard from '../types/IProjectCard';

export default (): IProjectCard[] => {
  const {
    allMarkdownRemark: { edges: projects },
  }: { allMarkdownRemark: IMarkdownProjects } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                slug
                date
                excerpt
                previewImage {
                  childImageSharp {
                    fluid(maxWidth: 200) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  return projects
    .filter(({ node: project }) => project.frontmatter.title.length > 0)
    .map(({ node: project }) => ({
      date: project.frontmatter.date,
      excerpt: project.frontmatter.excerpt,
      html: project.html,
      previewImage: project.frontmatter.previewImage.childImageSharp,
      slug: project.frontmatter.slug,
      title: project.frontmatter.title,
    }));
};
