import { withLeaflet, MapLayer } from 'react-leaflet';
import * as Vector from 'esri-leaflet-vector';

class VectorTileLayer extends MapLayer {
	createLeafletElement(props) {
		const layer = new Vector.vectorTileLayer(props.url, { ...props });

		if (props.eventHandlers) {
			const events = Object.keys(props.eventHandlers);
			events.forEach((event) => {
				layer.on(event, props.eventHandlers[event]);
			});
		}

		return layer;
	}

	componentDidMount() {
		const { map } = this.props.leaflet;
		this.leafletElement.addTo(map);
	}

	componentWillUnmount() {
		this.leafletElement.remove();
	}
}

export default withLeaflet(VectorTileLayer);