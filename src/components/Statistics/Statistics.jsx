import data from './data.json';
import { StatisticsItem } from './StatisticsItem';
import { StatList, Section, Title } from './Statistics.styled';

// console.log(data)

export const Statistics = ({ title }) => {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}
      <StatList>
        {data.map(i => (
            <StatisticsItem format={i.label} percentage={i.percentage} key={i.id} />
        ))}
      </StatList>
    </Section>
  );
};
