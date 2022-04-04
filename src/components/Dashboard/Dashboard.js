import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from "recharts";



const data = [
    {
        name: "Mar",
        investment: 32000,
        sell: 7010,
        revenue: 10401
    },
    {
        name: "Apr",
        investment: 25000,
        sell: 12007,
        revenue: 15800
    },
    {
        name: "May",
        investment: 65000,
        sell: 20206,
        revenue: 25010
    },
    {
        name: "Jun",
        investment: 70000,
        sell: 30290,
        revenue: 40405
    },
    {
        name: "Jul",
        investment: 60000,
        sell: 40051,
        revenue: 50900
    },
    {
        name: "Aug",
        investment: 50000,
        sell: 65070,
        revenue: 55085
    }
];


const Dashboard = () => {

    return (
        <div className='overflow-hidden py-14 flex justify-center'>
            <div className='grid md:grid-cols-2 gap-4 '>

                <div>
                    <h1 className='text-center text-xl font-serif underline text-stone-700'>Monthly Sells</h1>


                    <PieChart width={400} height={300}>
                        <Pie
                            dataKey="sell"
                            isAnimationActive={false}
                            data={data}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="#800080"
                            label
                        />
                        <Tooltip />
                    </PieChart>

                </div>

                <div>
                    <h1 className='text-center text-xl font-serif underline text-stone-700'>Monthly Revenues</h1>
                    <ResponsiveContainer width="95%" height={400}>
                        <BarChart
                            width={400}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barSize={20}
                        >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="revenue" fill="#000080" background={{ fill: '#eee' }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div>
                    <h1 className='text-center text-xl font-serif underline text-stone-700'>Total Chart</h1>
                    <ResponsiveContainer width="95%" height={400}>

                        <BarChart
                            width={400}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                left: 30,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sell" stackId="a" fill="#FF0000" />
                            <Bar dataKey="revenue" stackId="a" fill="#0000FF" />
                            <Bar dataKey="investment" stackId="a" fill="#008000" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div>
                    <h1 className='text-center text-xl font-serif underline text-stone-700'>Sells and Investments Charts</h1>
                    <ResponsiveContainer width="95%" height={400}>

                        <LineChart
                            width={400}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="investment" stroke="#008000" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="sell" stroke="#FF0000" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </div>

        </div>

    );
}

export default Dashboard;