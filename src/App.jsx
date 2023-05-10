import React from "react";
import { useRoutes } from "react-router-dom";
import Notification from "./components/common/notification/Notification";
import routes from "./routes";

const App = () => {
  // This useRoutes hook takes an array of objects to setup routing 
  const app = useRoutes(routes);

  return (
    <>
    {/* Notification componenet passing to my app for showing notifications */}
      <Notification />

      {/* This is our app routes which will render comonents according to the route of app */}
      {app}
    </>
  );
};

export default App;
