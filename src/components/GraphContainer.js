import React from 'react';
import { Paper, withStyles, Typography } from '@material-ui/core';
import { ResponsiveContainer } from 'recharts';

const styles = {
  graphContainer: {
    overflow: 'hidden',
    padding: '0.5em'
  }
};

const GraphContainer = props => {
  const { graphName, children, classes } = props;
  return (
    <Paper elevation={4} className={classes.graphContainer}>
      {children}
      <Typography variant="caption">{graphName}</Typography>
    </Paper>
  );
};

export default withStyles(styles)(GraphContainer);
