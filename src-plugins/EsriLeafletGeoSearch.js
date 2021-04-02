import { createControlComponent } from '@react-leaflet/core';
import * as ELG from 'esri-leaflet-geocoder';

const createGeoSearch = (props) => {
	let { providers } = props;

	providers = Object.keys(providers).map((provider) => {
		if (Object.keys(providers[provider]).length > 0) {
			return ELG[provider](providers[provider]);
		} else {
			return ELG[provider]();
		}
	});

	const searchOptions = {
		...props,
		providers,
	};

	const geoSearch = new ELG.Geosearch(searchOptions);

	if (props.eventHandlers) {
		const events = Object.keys(props.eventHandlers);
		events.forEach((event) => {
			geoSearch.on(event, props.eventHandlers[event]);
		});
	}

	return geoSearch;
};

const EsriLeafletGeoSearch = createControlComponent(createGeoSearch);

export default EsriLeafletGeoSearch;
