import { withLeaflet, MapControl } from 'react-leaflet';
import * as EL from 'esri-leaflet';

class EsriLeafletLayer extends MapControl {
	createLeafletElement(props) {
		var layer;

		switch (props.layerType) {
			case 'basemapLayer':
				layer = new EL.basemapLayer(props.name, { ...props });
				break;

			default:
				layer = new EL[props.layerType]({ ...props });
		}

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
}

export default withLeaflet(EsriLeafletLayer);
