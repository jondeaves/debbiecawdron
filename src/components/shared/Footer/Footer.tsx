import React from 'react';
import { connect } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

import FooterStyles from './Footer.styles';
import { IOwnProps, IProps, IStyles } from './Footer.types';

export const Footer: React.FunctionComponent<IProps> = ({ styles }: IProps) => {
  return (
    <footer role="footer" className={styles.container}>
      <p className={styles.title}>Deborah Cawdron</p>
      <p className={styles.subTitle}>BArch (Hons), DipArch</p>

      <p className={styles.contentfulWrapper}>
        <a
          href="https://www.contentful.com/"
          rel="nofollow"
          target="_blank"
          className={styles.contentfulLink}
        >
          <img
            src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
            alt="Powered by Contentful"
            className={styles.contentfulImage}
          />
        </a>
      </p>
    </footer>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(FooterStyles as any)(Footer);
