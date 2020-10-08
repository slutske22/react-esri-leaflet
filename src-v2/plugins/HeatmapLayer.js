import { withLeaflet, MapLayer } from 'react-leaflet';
import * as EL from 'esri-leaflet';
import 'leaflet.heat';
import Heatmap from 'esri-leaflet-heatmap';

class HeatmapLayer extends MapLayer {
	createLeafletElement(props) {
		const layer = new Heatmap.featureLayer({
			...props,
		});

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

export default withLeaflet(HeatmapLayer);
