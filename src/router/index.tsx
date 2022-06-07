import {useRoutes} from "react-router-dom";
import Introduction from "../pages/Introduction/Introduction";
import Activity from "../pages/Activity/Activity";
import ProfileManagement from "../pages/ProfileManagement/ProfileManagement";
import ComponentWidget from "../pages/ComponentWidget/ComponentWidget";
import Login from "../pages/Login/Login";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Introduction />,
    },
    {
      path: "activity",
      element: <Activity />,
    },
    {
      path: "profile-management",
      element: <ProfileManagement />,
    },
    {
      path: "component-widge",
      element: <ComponentWidget />,
    },
    {
      path: "login",
      element: <Login />
    },
  ]);
};

export default Router;