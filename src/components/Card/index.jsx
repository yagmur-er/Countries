import PropTypes from 'prop-types';

const Card = ({ country, pop }) => {
  return (
    <li className="card">
      <img src={country.flags.svg} alt={country.name.common}/>
      <div className="infos">
        <h2>{country.name.common}</h2>
        <h4>{country.capital}</h4>
        <p>pop. {pop}</p>
      </div>
    </li>
  );
};

Card.propTypes = {
  country: PropTypes.string,
  pop: PropTypes.any,
};

export default Card;
