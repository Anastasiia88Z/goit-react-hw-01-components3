import PropTypes from 'prop-types';
import s from './TransactionsHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th className={s.title}>Type</th>
        <th className={s.title}>Amount</th>
        <th className={s.title}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={s.titleItem}>
          <td className={s.titleItem_text}>{item.type}</td>
          <td className={s.titleItem_text}>{item.amount}</td>
          <td className={s.titleItem_text}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TransactionHistory;
