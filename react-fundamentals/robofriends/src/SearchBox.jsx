import PropTypes from 'prop-types';

const SearchBox = ({searchChange}) => {
    return (
        <>
            <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' 
                onChange={searchChange} />
        </>
    );
}

SearchBox.propTypes = {
    searchChange: PropTypes.func.isRequired
}

export default SearchBox;