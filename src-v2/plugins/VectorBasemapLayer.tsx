import { withLeaflet, MapLayer } from 'react-leaflet-v2';
import * as L from 'leaflet';
import * as Vector from 'esri-leaflet-vector';

type BasemapStyles =
	| 'ArcGIS:DarkGray'
	| 'ArcGIS:Navigation'
	| 'ArcGIS:DarkGray:Base'
	| 'ArcGIS:NavigationNight'
	| 'ArcGIS:DarkGray:Labels'
	| 'ArcGIS:Streets'
	| 'ArcGIS:LightGray'
	| 'ArcGIS:StreetsNight'
	| 'ArcGIS:LightGray:Base	ArcGIS:StreetsRelief'
	| 'ArcGIS:LightGray:Labels'
	| 'ArcGIS:StreetsRelief:Base'
	| 'ArcGIS:Imagery'
	| 'ArcGIS:Topographic'
	| 'ArcGIS:Imagery:Standard'
	| 'ArcGIS:Topographic:Base'
	| 'ArcGIS:Imagery:Labels'
	| 'ArcGIS:Terrain'
	| 'ArcGIS:Oceans	'
	| 'ArcGIS:Terrain:Base'
	| 'ArcGIS:Oceans:Base'
	| 'ArcGIS:Terrain:Detail'
	| 'ArcGIS:Oceans:Labels'
	| 'ArcGIS:Hillshade:Dark'
	| 'ArcGIS:Hillshade:Light'
	| 'OSM:DarkGray'
	| 'OSM:Standard'
	| 'OSM:DarkGray:Base'
	| 'OSM:StandardRelief'
	| 'OSM:DarkGray:Labels'
	| 'OSM:StandardRelief:Base'
	| 'OSM:LightGray	'
	| 'OSM:Streets'
	| 'OSM:LightGray:Base'
	| 'OSM:StreetsRelief'
	| 'OSM:LightGray:Labels'
	| 'OSM:StreetsRelief:Base'
	| 'ArcGIS:ColoredPencil'
	| 'ArcGIS:Community'
	| 'ArcGIS:Nova'
	| 'ArcGIS:ChartedTerritory'
	| 'ArcGIS:Midcentury	'
	| 'ArcGIS:ChartedTerritory:Base'
	| 'ArcGIS:Newspaper'
	| 'ArcGIS:ModernAntique	'
	| 'ArcGIS:ModernAntique:Base'
	| string;

interface VectorBasemapLayerProps extends L.Layer {
	name: BasemapStyles;
	apiKey?: string;
	token?: string;
	eventHandlers?: {
		[key: string]: Function;
	};
}

class VectorBasemapLayer extends MapLayer<VectorBasemapLayerProps, any> {
	leafletElement;
	props: {
		leaflet: {
			map: L.Map;
		};
	};

	createLeafletElement(props: VectorBasemapLayerProps) {
		const layer = new Vector.vectorBasemapLayer(props.name, { ...props });

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

const VectorBasemapLayerWrapped: React.ComponentType<VectorBasemapLayerProps> = withLeaflet(
	VectorBasemapLayer
);

export default VectorBasemapLayerWrapped;
