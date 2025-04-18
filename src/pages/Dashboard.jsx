import React from 'react';
import Logo from "../images/logo.png"
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";


const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Send request to the server to log out
            const response = await axios.get("http://localhost:5000/api/logout", {
                withCredentials: true,  // Ensure credentials (cookies) are sent
            });
            console.log("Logout successful:", response.data);

            // After logout, navigate to the login page
            navigate("/");  // Using react-router navigate for cleaner routing
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-60 bg-white shadow-md p-4">
                <h2 className="text-2xl font-bold text-blue-600 mb-6"><img src={Logo} className='h-14 px-10' /></h2>
                <nav className="space-y-2">
                    <a href="/dashboard/home" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">Dashboard</a>
                    <NavLink to="/dashboard/member" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">Members</NavLink>
                    <a href="/dashboard/corporation" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">Corporations</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">Medallions</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">Vehicles</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">Insurance</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">Calculation</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">Tools</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700">Profile</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-blue-100 text-gray-700" onClick={handleLogout}>Logout</a>
                </nav>
            </aside>

            {/* Dynamic Content via Outlet */}
            <div className="flex-1 flex flex-col">
                <Outlet /> {/* 👈 This will load child route components */}
            </div>

        </div>
    );
};

export default Dashboard;
