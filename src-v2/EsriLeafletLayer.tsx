import * as React from 'react';
import { withLeaflet, MapLayer } from 'react-leaflet-v2';
import * as L from 'leaflet';
import * as EL from 'esri-leaflet';

interface Props extends EL.BasemapLayerOptions {
	layerType: string;
	name?: string;
	leaflet?: {
		map: L.Map;
	};
}

class EsriLeafletLayer extends MapLayer<Props, any> {
	leafletElement: EL.BasemapLayer;
	props: Props;

	createLeafletElement(props) {
		var layer;

		switch (props.layerType) {
			case 'basemapLayer':
				// @ts-ignore
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

	componentWillUnmount() {
		this.leafletElement.remove();
	}
}

const RELLayer: React.ComponentType<Props> = withLeaflet(EsriLeafletLayer);

export default RELLayer;
