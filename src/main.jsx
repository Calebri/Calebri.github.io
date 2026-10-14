import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Timeline from './routes/Timeline.jsx'
import './main.css'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <>
      <p>Routing error!</p>
      <Link to="/">Return to homepage.</Link>
    </>,
    path: "/",
    children: [
      { index: true, element: <Home />},
      { path: "timeline", element: <Timeline />},
      { path: "about", element: <></>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
