import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import './main.css'
import Layout from './Layout.tsx'
import { Home, Timeline } from './routes.tsx'

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
    ]
  }
])

const rootElement: HTMLElement | null = document.getElementById('root')

if (!rootElement) {
  throw new Error("Root element not found!")
}

declare global {
  interface Window {
    __reactRoot?: any;
  }
}

const root = window.__reactRoot || createRoot(rootElement)
window.__reactRoot = root

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)