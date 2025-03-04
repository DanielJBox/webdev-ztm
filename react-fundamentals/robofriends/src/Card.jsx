import PropTypes from 'prop-types';

const Card = ({ name, email, id }) => {
  return (
    <div className="card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}`} alt='robo image' />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Card;