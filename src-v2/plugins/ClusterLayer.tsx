import { withLeaflet, MapLayer } from 'react-leaflet-v2';
import * as EL from 'esri-leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import Cluster from 'esri-leaflet-cluster';
import { MarkerClusterGroupOptions } from 'leaflet';

interface Props extends MarkerClusterGroupOptions {
	url: string;
	pointToLayer?: Function;
	style?: Function;
	onEachFeature?: Function;
	where?: string;
	fields?: string[];
	from?: Date | string;
	to?: Date | string;
	timeField?: boolean;
	timeFilterMode?: 'server' | 'client';
	simplifyFactor?: number;
	precision?: number;
	token?: string;
	proxy?: string;
	useCors?: boolean;
}

class ClusterLayer extends MapLayer<Props, any> {
	leafletElement;
	props: {
		leaflet: {
			map: L.Map;
		};
	};

	createLeafletElement(props) {
		const clusterLayer = Cluster({
			...props,
		});

		if (props.eventHandlers) {
			const events = Object.keys(props.eventHandlers);
			events.forEach((event) => {
				clusterLayer.on(event, props.eventHandlers[event]);
			});
		}

		return clusterLayer;
	}

	componentDidMount() {
		const { map } = this.props.leaflet;
		this.leafletElement.addTo(map);
	}

	componentWillUnmount() {
		this.leafletElement.remove();
	}
}

const ClusterLayerWrapped: React.ComponentType<Props> = withLeaflet(
	ClusterLayer
);

export default ClusterLayerWrapped;
