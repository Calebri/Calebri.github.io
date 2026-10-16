import { lazy } from 'react'

// Route definitions exist here so they can be lazy-loaded when exported to main.tsx
export const Home = lazy(() => import("./routes/Home.tsx"))
export const Timeline = lazy(() => import("./routes/Timeline.tsx"))