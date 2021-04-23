import { withLeaflet, MapControl } from 'react-leaflet-v2';
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

class GeoSearch extends MapControl {
	leafletElement;
	props: {
		leaflet: {
			map: L.Map;
		};
	};

	createLeafletElement(props) {
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

		// @ts-ignore
		const GeoSearch = new ELG.Geosearch(searchOptions);

		if (props.eventHandlers) {
			const events = Object.keys(props.eventHandlers);
			events.forEach((event) => {
				GeoSearch.on(event, props.eventHandlers[event]);
			});
		}

		return GeoSearch;
	}

	componentDidMount() {
		const { map } = this.props.leaflet;
		this.leafletElement.addTo(map);
	}

	componentWillUnmount() {
		this.leafletElement.remove();
	}
}

export default withLeaflet(GeoSearch);
