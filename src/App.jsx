import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout} from './components/Layout/Layout'
import {Home} from './components/Home/Home'
function App() {

  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
