import React from 'react';
import { connect } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

import Link from '../Link';
import ProjectCard from '../ProjectCard';

import ProjectListStyles from './ProjectList.styles';
import { IOwnProps, IProps, IStyles } from './ProjectList.types';

export const ProjectList: React.FunctionComponent<IProps> = ({
  projects,
  styles,
}: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      <div className={styles.showMore}>
        <Link to="/work" label="See more of my work" />
      </div>
    </div>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(ProjectListStyles)(
  ProjectList,
);
