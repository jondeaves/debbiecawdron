import { format } from 'date-fns';
import { navigate } from 'gatsby';
import React, { useState } from 'react';

import config from '../../config';

import Card from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

import { IProps } from './ProjectCard.types';

export const ProjectCard: React.FunctionComponent<IProps> = (props: IProps) => {
  const { project } = props;
  const [hover, setHover] = useState<boolean>(false);

  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  const onClick = () => navigate(`${config.projectPathPrefix}${project.slug}`);

  return (
    <Card
      image={project.previewImage}
      hover={hover}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <CardHeader
        title={project.title}
        subTitle={format(project.date, 'MMMM YYYY')}
        visible={hover}
      />
      <CardBody text={project.excerpt} visible={hover} />
    </Card>
  );
};

export default ProjectCard;
