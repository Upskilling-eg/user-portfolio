import React from "react";
import MasterLayout from "./layouts/MasterLayout/MasterLayout";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Experience from "./components/pages/Experience/Experience";
import Skills from "./components/pages/Skills/Skills";
import Work from "./components/pages/Work/Work";
import NotFound from "./components/pages/NotFound/NotFound";

const App = () => {
  let routes = createHashRouter([
    {
      path: "/",
      element: <MasterLayout />,
      //errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "experience", element: <Experience /> },
        { path: "skills", element: <Skills /> },
        { path: "work", element: <Work /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
