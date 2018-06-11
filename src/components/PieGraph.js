import { PieChart, Pie } from 'recharts';

const PieGraph = props => {
  const { data, key, name } = props;
  return (
    <PieChart>
      <Pie data={data} dataKey={key} nameKey={name} />
    </PieChart>
  );
};

export default PieGraph;
