import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/root";
import HelloView from "../views/hello";
import RootComponent from "../components/root";
import Guard from "./guard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        path: "/",
        element: <RootView />,
      },
      {
        path: "/:name",
        element: <HelloView />,
      },
      {
        path: "/auth",
        element: <Guard element={<HelloView />} />,
      },
    ],
  },
]);

export default router;
