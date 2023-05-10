import React, { Outlet } from "react-router-dom";

const BlankLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default BlankLayout;
