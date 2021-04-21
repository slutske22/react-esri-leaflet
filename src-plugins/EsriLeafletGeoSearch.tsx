import { createControlComponent } from '@react-leaflet/core';
import * as L from 'leaflet';
import 'esri-leaflet';
import * as ELG from 'esri-leaflet-geocoder';

type GeosearchEvents =
	| 'requeststart'
	| 'requestend'
	| 'requestsuccess'
	| 'requesterror'
	| 'authenticationrequired'
	| 'results';

interface Providers {
	arcgisOnlineProvider?: L.esri.Geocoding.ArcgisOnlineProviderOptions;
	featureLayerProvider?: L.esri.Geocoding.FeatureLayerProviderOptions;
	mapServiceProvider?: L.esri.Geocoding.MapServiceProviderOptions;
	geocodeServiceProvider?: L.esri.Geocoding.GeocodeServiceProviderOptions;
}

interface Props
	extends Omit<L.esri.Geocoding.GeosearchObject, 'providers'>,
		L.Evented {
	eventHandlers?: {
		[key in GeosearchEvents]: Function;
	};
	providers?: Providers;
}

const createGeoSearch = (props: Props) => {
	let { providers } = props;

	// @ts-ignore
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

	// @ts-ignore
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
