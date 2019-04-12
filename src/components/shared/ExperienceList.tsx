import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';
import Container from './Container';
import Experience from './Experience';

import styles from './ExperienceList.styles';
import { IProps } from './ExperienceList.types';

export const ExperienceList: React.FunctionComponent<IProps> = (
  props: IProps,
) => {
  const { items, title } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <Container
      type="section"
      alignment="left"
      flow="column"
      className={styles.container}
    >
      <h3 className={css(styles.title)}>{title}</h3>

      {items.map((item, idx) => (
        <Experience key={idx} item={item} />
      ))}
    </Container>
  );
};

export default ExperienceList;
