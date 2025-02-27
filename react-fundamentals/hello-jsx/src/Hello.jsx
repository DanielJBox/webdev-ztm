import PropTypes from "prop-types"
import './Hello.css';


const Hello = (props) => {
  
    Hello.propTypes = {
        greeting: PropTypes.string.isRequired,
    }

    return (
        <>
            <div id="Hello-Component">
                <p className="f1">This is a test!!!</p>
                <p>{props.greeting}</p>
            </div>
        </>
    )
}

export default Hello