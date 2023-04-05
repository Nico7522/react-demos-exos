import PriceConverter from '../price-converter/price-converter';
import PropsTypes from 'prop-types'
import style from './listclothes.module.css'
import clsx from 'clsx'

const ListClothes = ({listC}) => {
  return (
    <>
      <h2 style={{"text-align": "center"}}>Clothes list </h2>
      <div className={style['div']}>
        {listC.map(c =>  { 
            return <div className={style['clothe']} key={c.id}>
                <h3 className={style['name']}>Name : <span className={style['span']} >{c.name}</span></h3>
                <p className={style['items']}>Price : <PriceConverter price={c.price} />€</p>
                <p className={c.stock === 0 ? clsx(style['rouge'], style['items']) : style['items']}>Stock : {c.stock}</p>
                <span className={c.isSolded && clsx (style['last'], style['vert'])}>{c.isSolded && 'SOLDE !'}</span>
            </div>
})}
      </div>
    </>
  );
};
ListClothes.defaultProps = {
    listC: []
}

export default ListClothes;
