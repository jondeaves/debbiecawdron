import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Footer.styles';
import { IProps } from './Footer.types';

export const Footer: React.FunctionComponent<IProps> = (props: IProps) => {
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <footer role="footer" className={css(styles.container)}>
      <p className={css(styles.title)}>Deborah Cawdron</p>
      <p className={css(styles.subTitle)}>BArch (Hons), DipArch</p>

      <p className={css(styles.contentfulWrapper)}>
        <a
          href="https://www.contentful.com/"
          rel="nofollow"
          target="_blank"
          className={css(styles.contentfulLink)}
        >
          <img
            src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
            alt="Powered by Contentful"
            className={css(styles.contentfulImage)}
          />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
