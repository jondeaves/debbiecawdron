export interface IOwnProps {
  children: React.ReactNode;
}

export interface IQuery {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export type IProps = IOwnProps;
