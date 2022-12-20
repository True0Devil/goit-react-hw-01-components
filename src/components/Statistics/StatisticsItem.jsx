import { StatItem } from "./Statistics.styled";

export const StatisticsItem = ({ format, percentage }) => {
  return (
    <StatItem>
          <span>{format}</span>
          <br />
      <span>{percentage}%</span>
    </StatItem>
  );
};
