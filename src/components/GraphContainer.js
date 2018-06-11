import React from 'react';
import { Paper } from '@material-ui/core';
import { ResponsiveContainer } from 'recharts';

const GraphContainer = props => {
  const { children } = props;
  return (
    <Paper elevation={4}>
      <ResponsiveContainer>{children}</ResponsiveContainer>
    </Paper>
  );
};

export default GraphContainer;
