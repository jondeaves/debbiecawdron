import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';
import Experience from './Experience';

import styles from './ExperienceList.styles';
import { IProps } from './ExperienceList.types';

export const ExperienceList: React.FunctionComponent<IProps> = (
  props: IProps,
) => {
  const { items, title } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <div className={css(styles.container)}>
      <h3 className={css(styles.title)}>{title}</h3>

      {items.map((item, idx) => (
        <Experience key={idx} item={item} />
      ))}
    </div>
  );
};

export default ExperienceList;
