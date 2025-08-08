import { Outlet } from "react-router";


const DashboardLayout = () => {
    return (
        <div>
            <aside>
                
            </aside>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default DashboardLayout;