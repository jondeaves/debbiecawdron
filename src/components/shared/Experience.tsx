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
      {(title || location) && (
        <header>
          <h4 className={css(styles.title)}>
            {title && <strong>{title}</strong>}
            {location && `, ${location}`}
          </h4>
        </header>
      )}

      {subTitles &&
        subTitles.map((subTitle, idx) => (
          <h5 key={idx} className={css(styles.subTitle)}>
            {subTitle}
          </h5>
        ))}

      {descriptions &&
        descriptions.map((description, idx) => (
          <p
            key={idx}
            className={css(styles.description)}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ))}
    </article>
  );
};

export default Experience;
