import Card from './Card.jsx';
import PropTypes from 'prop-types';

const CardList = ({ robots }) => {
    console.log(robots);
    const cardsArray = robots.map((robot) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    });

    return (
        <>
        <div id="robofriends-cards">
            {cardsArray}
        </div>
        </>
    );
}

CardList.propTypes = {
  robots: PropTypes.array.isRequired
};

export default CardList