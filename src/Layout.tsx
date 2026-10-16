import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import { Suspense } from "react";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Suspense fallback={<p>Loading page content...</p>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}