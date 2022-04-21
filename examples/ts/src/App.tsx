import React, { useEffect, useState } from "react";
import Map from "./Map";
import UI from "./UI";
import "./styles.css";

const App = () => {
  const [apikey, setApikey] = useState(process.env.ARCGIS_API_KEY);
  const [keyModalOpen, setKeyModalOpen] = useState(true);

  /**
   * Helpful for dev - pop a .env file in your codebase with an ARCGIS_API_KEY, and you
   * won't have to enter it every time!
   */
  useEffect(() => {
    if (process.env.ARCGIS_API_KEY) {
      setKeyModalOpen(false);
    }
  }, []);

  return (
    <div className="App">
      <Map apikey={apikey} />
      <UI
        setApikey={setApikey}
        keyModalOpen={keyModalOpen}
        setKeyModalOpen={setKeyModalOpen}
      />
    </div>
  );
};

export default App;
