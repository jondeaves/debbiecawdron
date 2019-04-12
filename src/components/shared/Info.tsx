import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';
import Container from './Container';

import styles from './Info.styles';
import { IProps } from './Info.types';

export const Info: React.FunctionComponent<IProps> = (props: IProps) => {
  const { title, info } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <Container
      type="section"
      alignment="left"
      flow="column"
      className={styles.container}
    >
      <h3 className={css(styles.title)}>{title}</h3>

      <p className={css(styles.info)}>{info}</p>
    </Container>
  );
};

export default Info;
