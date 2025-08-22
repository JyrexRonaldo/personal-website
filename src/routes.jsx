import App from "./components/App/App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProjectLists from "./components/ProjectLists/ProjectLists";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <ProjectLists />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
