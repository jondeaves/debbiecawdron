export default interface ITheme {
  color: {
    border: string;
  };

  container: {
    maxWidth: number;
  };
}

export interface IStyleThemeProp {
  theme: ITheme;
}
