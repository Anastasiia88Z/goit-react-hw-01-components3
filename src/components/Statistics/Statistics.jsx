import PropTypes from 'prop-types';

import s from './Statistics.module.css';


export default function Statistics({ title, stats }) {
  return (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}

    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={s.item}
          style={{ backgroundColor: colorPicker() }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
 );
}      

Statistics.defaultProps = {
  title: '',
};

function colorPicker () {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};


