import { THead, Table, Raw, Data } from './Transactions.styled';
import PropTypes from 'prop-types';

export const Transactions = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <THead>Type</THead>
        <THead>Amount</THead>
        <THead>Currency</THead>
      </tr>
    </thead>

    <tbody>
      {data.map(item => (
        <Raw key={item.id}>
          <Data>{item.type}</Data>
          <Data>{item.amount}</Data>
          <Data>{item.currency}</Data>
        </Raw>
      ))}
    </tbody>
  </Table>
);

Transactions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
