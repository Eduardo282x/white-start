import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Home/Home";
import { Itinerary } from "./components/Itinerary/Itinerary";

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
