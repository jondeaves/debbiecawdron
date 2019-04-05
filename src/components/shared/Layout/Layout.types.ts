export interface IProps {
  children: React.ReactNode;
}

export interface IQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}
