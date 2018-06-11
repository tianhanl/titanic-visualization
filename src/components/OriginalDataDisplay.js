import React from 'react';
import GraphContainer from './GraphContainer';

const OriginalDataDisplay = props => {
  const { data } = props;
  return (
    <div>
      {Object.keys(data).map(key => {
        const currData = data[key];
        const presentationalData = Object.keys(currData.values).map(
          dataKey => ({
            name: dataKey,
            value: currData.values[dataKey]
          })
        );
        return (
          <GraphContainer key={key}>
            <BarGraph data={presentationalData} name="name" key="value" />
          </GraphContainer>
        );
      })}
    </div>
  );
};

export default OriginalDataDisplay;
