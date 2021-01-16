export interface MainRoute {
  title: string;
  link: string;
  icon: string;
  sortOrder: number;
  children?: MainRoute[];
}
