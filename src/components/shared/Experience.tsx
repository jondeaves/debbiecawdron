import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Experience.styles';
import { IProps } from './Experience.types';

export const Experience: React.FunctionComponent<IProps> = (props: IProps) => {
  const {
    item: { descriptions, location, title, subTitles },
  } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <article className={css(styles.container)}>
      <header>
        <h4 className={css(styles.title)}>
          <strong>{title}</strong>, {location}
        </h4>
      </header>

      {subTitles.map((subTitle, idx) => (
        <h5 key={idx} className={css(styles.subTitle)}>
          {subTitle}
        </h5>
      ))}

      {descriptions.map((description, idx) => (
        <p key={idx} className={css(styles.description)}>
          {description}
        </p>
      ))}
    </article>
  );
};

export default Experience;
