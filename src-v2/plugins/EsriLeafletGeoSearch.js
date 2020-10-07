import { withLeaflet, MapControl } from 'react-leaflet';
import * as ELG from 'esri-leaflet-geocoder';

class GeoSearch extends MapControl {
	createLeafletElement(props) {
		const searchOptions = {
			...props,
			providers: props.providers.map((provider) => ELG[provider]()),
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
}

export default withLeaflet(GeoSearch);
