import { MainRoute } from "../models/main-route.model";

export class CommonRoutes {
  public static mainLinks: MainRoute[] = [
    {
      title: "home",
      link: "/home",
      icon: "",
      sortOrder: 0,
      children: [],
    },
    {
      title: "collection",
      link: "/collection",
      icon: "",
      sortOrder: 1,
      children: [],
    },
    {
      title: "skills",
      link: "/skills",
      icon: "",
      sortOrder: 2,
      children: [],
    },
    // {
    //   title: "services",
    //   link: "/services",
    //   icon: "",
    //   sortOrder: 3,
    //   children: [],
    // },
    {
      title: "contact",
      link: "/contact",
      icon: "",
      sortOrder: 3,
      children: [],
    },
  ];
}
