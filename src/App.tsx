import { ReactElement, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import UserContext from "./context/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import CartItems from "./components/CartItems";
import Shimmer from "./components/Shimmer"

const AppLayout = (): ReactElement => {
  const [userData, setUserData] = useState({ userInfo: "John Doe" });

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={userData}>
        <div className="mx-4 my-2 max-w-[900px] md:mx-auto">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const About = lazy(() => import("./components/About"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

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
        element: (
          <Suspense fallback={<Shimmer numCards={3} />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <CartItems />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement,
);
root.render(<RouterProvider router={appRouter} />);
