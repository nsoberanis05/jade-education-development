import React from 'react'
import {PieChart, Pie, Cell, Tooltip} from 'recharts'



function PieCh() {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <PieChart width={350} height={350}>
              <Pie 
              data={data}
              dataKey='value'
              label
              cx="50%"
              cy="50%">
              
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}

              </Pie>
              <Tooltip/>
    </PieChart>
  )
}

export default PieCh