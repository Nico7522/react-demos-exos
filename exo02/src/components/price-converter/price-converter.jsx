import PropsTypes from 'prop-types';


const PriceConverter = ({price}) => {
    price = ((price*0.91).toLocaleString('fr', {minimumFractionDigits: 1, maximumFractionDigits: 2}))

    return (
        <span>{price}</span>
        
    )
}

PriceConverter.PropsTypes = {
    price: PropsTypes.number.isRequired
}

export default PriceConverter;