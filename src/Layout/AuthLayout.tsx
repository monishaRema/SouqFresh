import { Outlet } from "react-router";


const AuthLayout = () => {
    return (
       <main className="min-h-screen flex justify-center items-center py-5">
            <div className="max-w-5xl mx-auto px-5 ">
                <div className="flex flex-col md:flex-row gap-5 bg-white rounded-4xl text-gray-800 overflow-hidden">
                    {/* Image for auth */}
                    <div className="auth-img-box flex-1">
                        <img src="https://parisunitedgroup.com/_next/image?url=https%3A%2F%2Fadmin.parisunitedgroup.com%2Fuploads%2Fservice_01_e0c824ae9e.webp&w=828&q=90" alt="Auth Image" />
                    </div>
                    <div className="auth-content px-5 py-12 flex-1">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
       </main>
    );
};

export default AuthLayout;