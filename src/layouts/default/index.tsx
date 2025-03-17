import { Outlet } from "react-router";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

export default function DefaultLayout() {
    return (
        <div className="wrapper h-screen w-screen flex flex-col relative">
            <Header />

            <div className="flex-1 flex">
                <Sidebar />

                <main className="flex-1 bg-dark-midnight flex flex-col">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}