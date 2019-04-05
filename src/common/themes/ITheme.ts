export default interface ITheme {
  color: {
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
