import React from 'react';

import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { interpolateRdYlBu } from 'd3-scale-chromatic';

const PieGraph = props => {
  const { data, valueKey, name } = props;
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey={valueKey}
        nameKey={name}
        outerRadius={'50%'}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={interpolateRdYlBu(index / data.length)} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieGraph;
