import {ReactElement,lazy,  Suspense, useContext} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import UserContext from "./context/UserContext";

const AppLayout = (): ReactElement => {
  return (
    <div className="mx-4 my-2 max-w-[900px] md:mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

const About = lazy(() => import('./components/About'))
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<div>Loading team...</div>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Suspense><RestaurantMenu /></Suspense>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement);
root.render(<RouterProvider router={appRouter} />);
