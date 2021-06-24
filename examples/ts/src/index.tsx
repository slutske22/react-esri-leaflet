import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	rootElement
);
