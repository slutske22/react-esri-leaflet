import { withLeaflet, MapLayer } from 'react-leaflet';
import * as EL from 'esri-leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import Cluster from 'esri-leaflet-cluster';

class ClusterLayer extends MapLayer {
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

export default withLeaflet(ClusterLayer);
