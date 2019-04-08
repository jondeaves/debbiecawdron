import React from 'react';
import Helmet from 'react-helmet';

import useMeta from '../../../hooks/useMeta';

import { IProps } from './Seo.types';

export const Seo: React.FunctionComponent<IProps> = ({
  description,
  keywords = [],
  lang,
  meta = [],
  template,
  title,
}: IProps) => {
  const siteMetadata = useMeta();

  const metaDescription = description || siteMetadata.description;

  title = title ? title : `${siteMetadata.title} ${siteMetadata.description}`;
  template = template
    ? template
    : `%s | ${siteMetadata.title} ${siteMetadata.description}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={template}
      meta={[
        {
          content: metaDescription,
          name: 'description',
        },
        {
          content: title,
          property: 'og:title',
        },
        {
          content: metaDescription,
          property: 'og:description',
        },
        {
          content: 'website',
          property: 'og:type',
        },
        {
          content: 'summary',
          name: 'twitter:card',
        },
        {
          content: siteMetadata.author,
          name: 'twitter:creator',
        },
        {
          content: title,
          name: 'twitter:title',
        },
        {
          content: metaDescription,
          name: 'twitter:description',
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                content: keywords.join(', '),
                name: 'keywords',
              }
            : [],
        )
        .concat(meta)}
    />
  );
};

Seo.defaultProps = {
  description: '',
  keywords: [
    'architecture',
    'student',
    'portfolio',
    'part one architect',
    'part two architect',
  ],
  lang: 'en',
  meta: [],
};

export default Seo;
