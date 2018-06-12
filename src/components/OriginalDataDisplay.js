import React from 'react';
import GraphContainer from './GraphContainer';
import PieGraph from './PieGraph';
import { titanicData } from '../data/titanicData';
import { Grid } from '@material-ui/core';

const OriginalDataDisplay = props => {
  return (
    <Grid container wrap="nowrap" spacing={16}>
      {Object.keys(titanicData).map(key => {
        const currData = titanicData[key];
        const presentationalData = Object.keys(currData.values).map(
          dataKey => ({
            name: dataKey,
            value: currData.values[dataKey]
          })
        );
        return (
          <Grid item key={key}>
            <GraphContainer width={300} height={300}>
              <PieGraph
                data={presentationalData}
                name={'name'}
                valueKey={'value'}
              />
            </GraphContainer>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default OriginalDataDisplay;
