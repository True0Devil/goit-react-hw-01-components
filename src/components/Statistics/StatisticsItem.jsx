import { StatItem } from "./Statistics.styled";
import PropTypes from 'prop-types'

export const StatisticsItem = ({ format, percentage }) => {
  return (
    <StatItem>
          <span>{format}</span>
          <br />
      <span>{percentage}%</span>
    </StatItem>
  );
};

StatisticsItem.propTypes = {
  format: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
