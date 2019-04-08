export default interface ITheme {
  color: {
    background: string;
    border: string;
  };

  container: {
    maxWidth: number;
  };

  spacing: {
    heading: number;
  };
}

export interface IStyleThemeProp {
  theme: ITheme;
}
