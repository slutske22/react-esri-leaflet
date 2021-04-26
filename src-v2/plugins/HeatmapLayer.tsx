import { withLeaflet, MapLayer } from 'react-leaflet-v2';
import * as L from 'leaflet';
import 'leaflet.heat';
import * as Heatmap from 'esri-leaflet-heatmap';
import { HeatMapOptions } from 'leaflet';

interface Props extends HeatMapOptions {
	url: string;
	where?: string;
	fields?: string[];
	from?: Date | string;
	to?: Date | string;
	timeField?: boolean;
	timeFilterMode?: 'server' | 'client';
	precision?: number;
	token?: string;
	proxy?: string;
	useCors?: boolean;
}

class HeatmapLayer extends MapLayer<Props, any> {
	leafletElement;
	props: {
		leaflet: {
			map: L.Map;
		};
	};

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

const HeamapLayerWrapped: React.ComponentType<Props> = withLeaflet(
	HeatmapLayer
);

export default HeamapLayerWrapped;
