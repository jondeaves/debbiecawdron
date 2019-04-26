import React from 'react';

import Container from './Container';

import styles from './Grid.styles';
import { IProps } from './Grid.types';

export const Grid: React.FunctionComponent<IProps> = (props: IProps) => {
  const { children } = props;

  return (
    <Container type="div" alignment="left" className={styles.wrapper}>
      {children}
    </Container>
  );
};

export default Grid;
