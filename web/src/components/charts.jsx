import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Typography from '@material-ui/core/Typography';

const data = [
  {
    name: 'Ryan',
    Sleep: 12434,
    Exercise: 3180,
    Social: 895,
    Work: 12088,
    amt: 2400,
  },
  {
    name: 'Nick',
    Sleep: 14723,
    Exercise: 1366,
    Social: 1406,
    Work: 12584,
    amt: 2210,
  },
  {
    name: 'Carlos',
    Sleep: 13865,
    Exercise: 3592,
    Social: 1020,
    Work: 11745,
    amt: 2290,
  },
  {
    name: 'Kevin',
    Sleep: 8533,
    Exercise: 1452,
    Social: 895,
    Work: 12831,
    amt: 2000,
  },
  {
    name: 'John',
    Sleep: 12310,
    Exercise: 4426,
    Social: 1404,
    Work: 12409,
    amt: 2181,
  },
  {
    name: 'Holly',
    Sleep: 9023,
    Exercise: 2171,
    Social: 911,
    Work: 12895,
    amt: 2500,
  },
  {
    name: 'Fiona',
    Sleep: 15331,
    Exercise: 1739,
    Social: 1745,
    Work: 13483,
    amt: 2100,
  },
  {
    name: 'Jamal',
    Sleep: 8056,
    Exercise: 3955,
    Social: 1658,
    Work: 11995,
    amt: 2100,
  },
  {
    name: 'Nadia',
    Sleep: 9333,
    Exercise: 3807,
    Social: 1037,
    Work: 12060,
    amt: 2100,
  },
  {
    name: 'Wendy',
    Sleep: 10642,
    Exercise: 673,
    Social: 224,
    Work: 11081,
    amt: 2100,
  },
  {
    name: 'Shaquon',
    Sleep: 15774,
    Exercise: 2175,
    Social: 1492,
    Work: 11598,
    amt: 2100,
  },
  {
    name: 'Kristal',
    Sleep: 9357,
    Exercise: 3382,
    Social: 1247,
    Work: 11608,
    amt: 2100,
  },
  {
    name: 'Barry',
    Sleep: 14504,
    Exercise: 2874,
    Social: 1163,
    Work: 12484,
    amt: 2100,
  },
  {
    name: 'Shaniqua',
    Sleep: 12499,
    Exercise: 922,
    Social: 1206,
    Work: 12739,
    
  },
];

export const Example = () => {
    return (
        <BarChart
          width={1100}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Exercise" stackId="a" fill="#8884d8" />
          <Bar dataKey="Sleep" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Social" stackId="a" fill="#765" />
          <Bar dataKey="Work" stackId="a" fill="blue" />
        </BarChart>
    );
}
