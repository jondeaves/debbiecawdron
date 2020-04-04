import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import Container from './Container';
import Link from './Link';
import ProjectCard from './ProjectCard';

import styles from './ProjectList.styles';
import { IProps } from './ProjectList.types';
import useFeaturedProjects from '../../hooks/useFeaturedProjects';

export const ProjectList: React.FunctionComponent<IProps> = (props: IProps) => {
  const { projects, showMore } = props;
  const { css } = useFela<ITheme, IProps>(props);

  const projects2 = useFeaturedProjects();
  console.log(projects2);

  return (
    <Container type="section" flex={false}>
      <div className={css(styles.grid)}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {showMore && (
        <div className={css(styles.showMore)}>
          <Link to="/work" label="See more of my work" />
        </div>
      )}
    </Container>
  );
};

ProjectList.defaultProps = {
  showMore: false,
};

export default ProjectList;
