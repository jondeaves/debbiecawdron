import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';
import Container from './Container';

import styles from './Hero.styles';
import { IProps } from './Hero.types';

export const Hero: React.FunctionComponent<IProps> = (props: IProps) => {
  const { title, subTitle } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <Container type="section" flow="column" className={styles.container}>
      <h1 className={css(styles.title)}>{title}</h1>
      <h2 className={css(styles.subTitle)}>{subTitle}</h2>

      <hr className={css(styles.divider)} />
    </Container>
  );
};

export default Hero;
