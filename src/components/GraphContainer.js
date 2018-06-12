import React from 'react';
import { Paper, withStyles } from '@material-ui/core';
import { ResponsiveContainer } from 'recharts';

const styles = {
  graphContainer: {
    overflow: 'hidden',
    borderRadius: 4
  }
};

const GraphContainer = props => {
  const { width, height, children, classes } = props;
  return <Paper elevation={4}>{children}</Paper>;
};

export default withStyles(styles)(GraphContainer);
