//rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
//pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Works from "./pages/Works";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/works",
          element: <Works />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
