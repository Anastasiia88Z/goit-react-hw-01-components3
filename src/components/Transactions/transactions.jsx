import PropTypes from 'prop-types';
import s from './TransactionsHistory.module.css';

export default function TransactionHistory({ items }) { 
 return (
  <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th className={s.title}>Type</th>
        <th className={s.title}>Amount</th>
        <th className={s.title}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({id, type, amount, currency}) => (
        <tr key={id} className={s.titleItem}>
          <td className={s.titleItem_text}>{type}</td>
          <td className={s.titleItem_text}>{amount}</td>
          <td className={s.titleItem_text}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
 );
}

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


