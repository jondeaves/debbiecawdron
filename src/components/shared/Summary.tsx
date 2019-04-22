import React from 'react';

import Container from './Container';

import styles from './Summary.styles';
import { IProps } from './Summary.types';

export const Summary: React.FunctionComponent<IProps> = () => {
  return (
    <Container type="p" alignment="center" className={styles.wrapper}>
      I have recently completed my Part 2 at the Mackintosh School of
      Architecture in Glasgow and I am looking to be considered for any Part 1
      or Part 2 positions available in the Greater Glasgow area.
    </Container>
  );
};

export default Summary;
