import { ApplicationBuilt } from "./application-built.model";

export const APPLICATIONS_BUILT_LIST: ApplicationBuilt[] = [
  {
    type: "web",
    title: "Web Shutdown Maintenance System (Mining Company - Australia)",
    roles: [
      "Build a system  enabling management teams to manage their shutdowns, turnarounds, and projects.",
      " Language used to create the application is (Typescript) with the use of framework (Angular 9)",
      "Frontend framework used ( MaterialAngular, Bootstrap )",
      "Use Services to request data( REST Api )",
      "Created Login UI and Functionality",
      "Created gantt components to track and visualize progress of shutdowns.",
      "Added Web Responsiveness for UI/Device flexibility",
      "Created charts (Chart.js) which are use to build multiple analytical report pages",
      "Implemented tables with Excel liked features using 3rd party packages with CRUD Functionalities/Features.",
      "Build admin management tables/components with CRUD Functionalities.",
      "Implement design patterns and generics to handle state management and easily develop modules and components.",
      "Use Azure Devops for pipeline and Git for Version Control.",
    ],
  },
  {
    type: "mobile",
    title:
      "Mobile: Shutdown Maintenance System (Mining Company - Australia) - Progress tracker",
    roles: [
      "Build an application that updates work progress, capture delays, register incidents, and add their comments.",
      "Language used is Dart and Framework used is Flutter",
      "Use Azure Devops for pipeline and Git for Version Control.",
      "Used third party package, dependency(GetX) a State, Navigation, Dependency Manager to easily request data (RestApi)",
      "Created Login UI and Functionality",
      "Create widgets that can assess all shutdowns and projects",
      "Implement design patterns and generics to easily develop widgets/controllers/screens",
      "Create widgets that go through the bucket of work, and update progress.",
    ],
  },
  {
    type: "web",
    title: "Admin Management - Web Application (Mining Company - Australia)",
    roles: [
      "Build an application using Flutter Web that allows admin to easily handle CRUD operations of data(Rest Api) with a more friendly UI UX.",
      "Created Login UI and Functionality",
      "Use Azure Devops for pipeline and Git for Version Control.",
      "Implement design patterns and generics to easily develop widgets/controllers/screens",
      "Creates dynamic bucket widgets that allows users to easily update information and data.",
      "Added Context Menu Features that enable users to Edit, Clone, Move, Remove an item from the bucket list",
    ],
  },
  {
    type: "web",
    title: "Club/Restaurant/Event Management System (Discotek - Germany)",
    roles: [
      "Handle reservations, booking, and event management of Resto, Disco sites.",
      "Language used is PHP/Javascript and Jquery & Bootstrap used for frontend Library",
      "Used Wordpress for Framework",
      "Used SVN for version control and Jira for planning and tracking.",
      "Communicating with customers to specify new requirements and give support",
      "Costing and estimating new or modified systems/modules/functions",
      "Handle Web Responsiveness for UI/Device flexibility",
      "Test Pages Functionalities to ensure that it operates satisfactorily and correctly",
      "Track bugs, features and solutions in the internal issue tracking tool",
      "Handling support and feedback",
    ],
  },
];
