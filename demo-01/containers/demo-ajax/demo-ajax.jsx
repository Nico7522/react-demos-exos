import { useState } from "react";
import SearchBar from "../../src/components/demo-ajax/search-bar/search-bar";
import LiveBoard from "../../src/components/demo-ajax/liveboard/liveboard";

export default function DemoAjax() {
  const [station, setStation] = useState(null);

  // Méthode envoyer aux enfants pour mettre à jour le parent
  const handleStation = (station) => {
    setStation(station);
  };

  return (
    <>
      <SearchBar onSearch={handleStation} />
      {station && <LiveBoard station={station} />}
    </>
  );
}
