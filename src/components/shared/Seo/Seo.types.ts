export interface IOwnProps {
  description?: string;
  keywords?: string[];
  lang?: string;
  meta?: any[];
  title: string;
}

export interface IQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
}

export type IProps = IOwnProps;
