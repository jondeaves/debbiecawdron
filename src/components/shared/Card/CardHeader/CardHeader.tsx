import React from 'react';
import { connect } from 'react-fela';

import ITheme from '../../../../common/themes/ITheme';

import CardHeaderStyles from './CardHeader.styles';
import { IOwnProps, IProps, IStyles } from './CardHeader.types';

export const CardHeader: React.FunctionComponent<IProps> = ({
  title,
  subTitle,
  styles,
}: IProps) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.mainTitle}>{title}</h3>
      <h4 className={styles.subTitle}>{subTitle}</h4>
    </div>
  );
};

CardHeader.defaultProps = {
  visible: true,
};

export default connect<IOwnProps, IStyles, ITheme>(CardHeaderStyles)(
  CardHeader,
);
