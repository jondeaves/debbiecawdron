import React from 'react';
import { connect } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import CardBodyStyles from './CardBody.styles';
import { IOwnProps, IProps, IStyles } from './CardBody.types';

export const CardBody: React.FunctionComponent<IProps> = ({
  styles,
  text,
}: IProps) => {
  return (
    <div className={styles.wrapper}>
      <p>{text}</p>
    </div>
  );
};

CardBody.defaultProps = {
  visible: true,
};

export default connect<IOwnProps, IStyles, ITheme>(CardBodyStyles)(CardBody);
