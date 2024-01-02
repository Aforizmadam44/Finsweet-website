import { Route, Routes } from "react-router";
import { MyRoutes } from "../MyRoutes";

const Routing = () => {
  return (
    <>
      <Routes>
        {MyRoutes.map(({ id, path, element }) => {
          return <Route key={id} path={path} element={element} />;
        })}
      </Routes>
    </>
  );
};

export default Routing;
