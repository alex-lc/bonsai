import React from "react";
// react-router-dom
import { useLocation } from "react-router-dom";
// components
import CreateNewTree from "../../components/forest/CreateNewTree";

const MainContentView = () => {
  const [location, setLocation] = React.useState("");
  const loc = useLocation();

  React.useEffect(() => {
    setLocation(loc.pathname);
  }, [loc]);

  if (location && location === "/dashboard/plant-tree") {
    return <CreateNewTree />;
  }

  return (
    <>
      <h1>Main Content View</h1>
    </>
  );
};

export default MainContentView;
