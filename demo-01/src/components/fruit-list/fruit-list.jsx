import style from './fruit-list.module.css'

const FruitList = ({ fruits }) => {
    const fruitsJSX = fruits.map((f) => 
        <li className={style['li']} key={f.id}>{f.name}</li>
    )

  return (<ul>{fruitsJSX}</ul>)
};

export default FruitList;
