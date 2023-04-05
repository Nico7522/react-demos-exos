import React, { useState } from "react";
import Bienvenue from "../bienvenue";
const SearchBarre = () => {
  const [name, setName] = useState();
  return (
    <div>
      <label>Votre nom : </label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <Bienvenue name={name} />
    </div>
  );
};

export default SearchBarre;
