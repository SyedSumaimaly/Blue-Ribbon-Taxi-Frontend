import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

function DashboardComp() {


    const data = [
        { name: 'Jan', users: 400 },
        { name: 'Feb', users: 300 },
        { name: 'Mar', users: 500 },
        { name: 'Apr', users: 200 },
        { name: 'May', users: 600 },
    ];

    return (
        <div className="flex-1 flex flex-col">
            {/* Top Navbar */}
            <header className="bg-white  p-6 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
                <div className="text-sm text-gray-600"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
                </svg>
                </div>
            </header>

            {/* Main Area */}
            <div className='p-4'>
                <h1 className='text-lg font-bold'>
                    Admin
                </h1>
            </div>
            <main className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">Insurance</h3>
                        <p className="text-sm text-gray-600">1,368</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">Liability</h3>
                        <p className="text-sm text-gray-600">$ 32,695</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">Workers Comp</h3>
                        <p className="text-sm text-gray-600">$ 32,695</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">Collision</h3>
                        <p className="text-sm text-gray-600">$ 32,695</p>
                    </div>
                </div>
            </main>

            <div className="ml-8 mr-6 mb-6 mt-10 bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">User Activity Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="users" stroke="#2563EB" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DashboardComp