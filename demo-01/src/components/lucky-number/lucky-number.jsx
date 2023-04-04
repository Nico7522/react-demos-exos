import PropTypes from 'prop-types'

const LuckyNumber = ({ nb }) => <p>Nombre porte bonheur {nb}</p>;

LuckyNumber.defaultProps = {
    nb : 42
}

LuckyNumber.propTypes = {
    nb: PropTypes.number.isRequired
}

export default LuckyNumber;
