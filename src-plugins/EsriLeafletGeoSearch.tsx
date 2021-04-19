import { createControlComponent } from '@react-leaflet/core';
import * as L from 'leaflet';
import * as EL from 'esri-leaflet';
import 'esri-leaflet-geocoder';

type GeosearchEvents =
	| 'requeststart'
	| 'requestend'
	| 'requestsuccess'
	| 'requesterror'
	| 'authenticationrequired'
	| 'results';

interface Providers {
	arcgisOnlineProvider?: EL.Geocoding.ArcgisOnlineProviderOptions;
	featureLayerProvider?: EL.Geocoding.FeatureLayerProviderOptions;
	mapServiceProvider?: EL.Geocoding.MapServiceProviderOptions;
	geocodeServiceProvider?: EL.Geocoding.GeocodeServiceProviderOptions;
}

interface Props
	extends Omit<EL.Geocoding.GeosearchObject, 'providers'>,
		L.Evented {
	eventHandlers?: {
		[key in GeosearchEvents]: Function;
	};
	providers?: Providers;
}

const createGeoSearch = (props: Props) => {
	const { providers: providersObj } = props;

	const providers = Object.keys(providersObj).map(
		(provider): EL.Geocoding.GeosearchProvider => {
			if (Object.keys(providersObj[provider]).length > 0) {
				return EL.Geocoding[provider](providersObj[provider]);
			}
			return EL.Geocoding[provider]();
		}
	);

	const searchOptions = {
		...props,
		providers,
	};

	const geoSearch = new EL.Geocoding.Geosearch(searchOptions);

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
