import { withLeaflet, MapControl } from 'react-leaflet';
import * as ELG from 'esri-leaflet-geocoder';

class GeoSearch extends MapControl {
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
