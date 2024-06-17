import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    utilization: 4000,
 
  },
  {
    name: 'Feb',
    utilization: 3000,
  },
  {
    name: 'Mar',
    utilization: 2000,
  },
  {
    name: 'Apr',
    utilization: 2780,
  },
  {
    name: 'May',
    utilization: 1890,
  },
  {
    name: 'Jun',
    utilization: 2390,
  },
  {
    name: 'Jul',
    utilization: 3490,
  },
  {
    name: 'Aug',
    utilization: 2390,
  },
  {
    name: 'Sep',
    utilization: 3490,
  },
  {
    name: 'Oct',
    utilization: 3490,
  },
];

const utilizationChart = () => {

  
    return (
        <ResponsiveContainer height={400} className="widthGraph" >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="utilization" stackId="a" fill="#BABABA" />
        </BarChart>
        </ResponsiveContainer>

    );
  
}

export default utilizationChart;
