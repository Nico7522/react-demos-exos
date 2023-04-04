import React, { useState } from 'react';
import Bienvenue from '../bienvenue';
const SearchBarre = () => {

    // let valeur = "dd"
    
    const [value, setValue] = useState('');
  return (
    <div>
      <label>Votre nom : </label>
      <input type="text" onChange={(e) => setValue(e.target.value)}/>
      <Bienvenue name={value} />
    </div>
  );
};

export default SearchBarre