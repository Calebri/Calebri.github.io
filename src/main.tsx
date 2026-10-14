import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.tsx'
import Timeline from './routes/Timeline.tsx'
import './main.css'
import Layout from './Layout.tsx'

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

const rootElement: HTMLElement | null = document.getElementById('root')

if (!rootElement) {
  throw new Error("Root element not found!")
}


createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
