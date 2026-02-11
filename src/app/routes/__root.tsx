import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Header } from "@/widgets/haeder";

const RootLayout = () => (
    <>
        <Header />
        <Outlet />
        <TanStackRouterDevtools />
    </>
);

export const Route = createRootRoute({ component: RootLayout });
