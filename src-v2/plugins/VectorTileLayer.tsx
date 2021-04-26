import { withLeaflet, MapLayer } from 'react-leaflet-v2';
import * as L from 'leaflet';
import * as Vector from 'esri-leaflet-vector';

interface VectorTileLayerProps extends L.Layer {
	url: string;
	apiKey?: string;
	token?: string;
	style?: Function;
	eventHandlers?: {
		[key: string]: Function;
	};
}

class VectorTileLayer extends MapLayer<VectorTileLayerProps, any> {
	leafletElement;
	props: {
		leaflet: {
			map: L.Map;
		};
	};

	createLeafletElement(props: VectorTileLayerProps) {
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

const VectorTileLayerWrapped: React.ComponentType<VectorTileLayerProps> = withLeaflet(
	VectorTileLayer
);

export default VectorTileLayerWrapped;
