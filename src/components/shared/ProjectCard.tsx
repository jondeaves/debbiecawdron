import { format } from 'date-fns';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import config from '../../config';

import styles from './ProjectCard.styles';
import { IProps, IStyleProps } from './ProjectCard.types';

export const ProjectCard: React.FunctionComponent<IProps> = (props: IProps) => {
  const { project } = props;
  const [hover, setHover] = useState<boolean>(false);
  const { css } = useFela<ITheme, IStyleProps>({ ...props, hover });

  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  const onClick = () => navigate(`${config.projectPathPrefix}${project.slug}`);

  return (
    <article
      className={css(styles.wrapper)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Img fluid={project.previewImage.fluid} />

      <div className={css(styles.overlay)} />

      <div className={css(styles.faded)}>
        <h3 className={css(styles.mainTitle)}>{project.title}</h3>
        <h4 className={css(styles.subTitle)}>
          {format(project.date, 'MMMM YYYY')}
        </h4>

        <p className={css(styles.body)}>{project.excerpt}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
