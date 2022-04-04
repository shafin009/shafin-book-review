import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Tooltip, Legend } from "recharts";



const data = [
    {
        name: "Mar",
        investment: 100000,
        sell: 241,
        "revenue": 10401
    },
    {
        name: "Apr",
        investment: 200000,
        sell: 423,
        "revenue": 24500
    },
    {
        name: "May",
        investment: 500000,
        sell: 726,
        "revenue": 67010
    },
    {
        name: "Jun",
        investment: 500000,
        sell: 529,
        "revenue": 40405
    },
    {
        name: "Jul",
        investment: 600000,
        sell: 601,
        "revenue": 50900
    },
    {
        name: "Aug",
        investment: 700000,
        sell: 670,
        "revenue": 61000
    }
];


const Dashboard = () => {

    return (
        <div>
            <PieChart width={1000} height={400}>
                <Pie
                    dataKey="investment"
                    isAnimationActive={false}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
            <BarChart
                width={500}
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
                <Bar dataKey="sell" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </div>
    );
}

export default Dashboard;