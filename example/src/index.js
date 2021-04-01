import React from 'react';
import ReactDOM from 'react-dom';
// import dotenv from 'dotenv';
import App from './App';

// dotenv.config();

const rootElement = document.getElementById('root');
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	rootElement
);
