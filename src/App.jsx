import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Home/Home";
import { Itinerary } from "./components/Itinerary/Itinerary";
import { Passengers } from "./components/Passengers/Passengers";
import { Seating } from "./components/Seating/Seating";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/itinerario",
          element: <Itinerary />,
        },
        {
          path: "/passengers",
          element: <Passengers />,
        },
        {
          path: "/seating",
          element: <Seating />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
