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
import Footer from "./components/Footer";

const AppLayout = (): ReactElement => {
  const [userData, setUserData] = useState({ userInfo: "John Doe" });

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={userData}>
        <div className="min-h-screen flex flex-col bg-[#fff7d6]">
            <Header />
          <div className="flex-1 z-10 pt-28 bg-[#fff7d6]">
            <div className="max-w-[1200px] mx-auto px-2">
              <Outlet />
            </div>
          </div>
          <Footer />
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
