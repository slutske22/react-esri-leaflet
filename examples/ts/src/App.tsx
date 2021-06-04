import React, { useState } from 'react';
import Map from './Map';
import UI from './UI';
import './styles.css';

const App = () => {
	const [apikey, setApikey] = useState(process.env.ARCGIS_API_KEY);
	const [keyModalOpen, setKeyModalOpen] = useState(true);

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
