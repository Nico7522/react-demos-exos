import PropTypes from 'prop-types'
import styles from './bienvenue.module.css'
import clsx from 'clsx'
import SearchBarre from './searchbarre/searchbarre';
const Bienvenue = ({name, age}) => {
   
  return(
    <div>
        {/* <SearchBarre /> */}
    <div className={styles['bienvenue']}>
      <p className={clsx(styles['name'], styles['bg'])} >Bienvenue {name} sur l'application React !</p>
      <p className={styles['age']}>Vous avez {age} ans</p>
    </div>
    </div>
  );

  
};

Bienvenue.defaultProps = {
    age : 18,
    name: 'Nicolas'
}

Bienvenue.propTypes = {
    age: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default Bienvenue;
