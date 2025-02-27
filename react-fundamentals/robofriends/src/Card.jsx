const Card = () => {
  return (
    <div className="card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src='https://robohash.org/test' alt='robo image' />
        <div>
            <h2>Jane Doe</h2>
            <p>jane.doe@robofriends.com</p>
        </div>
    </div>
  );
}

export default Card;