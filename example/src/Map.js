import React from 'react';
import { MapContainer, LayersControl } from '../../node_modules/react-leaflet';

// import {
// 	BasemapLayer,
// 	FeatureLayer,
// 	DynamicMapLayer,
// 	TiledMapLayer,
// 	ImageMapLayer,
// } from 'react-esri-leaflet';

// import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
// import HeatmapLayer from 'react-esri-leaflet/plugins/HeatmapLayer';
// import ClusterLayer from 'react-esri-leaflet/plugins/ClusterLayer';

import {
	BasemapLayer,
	FeatureLayer,
	DynamicMapLayer,
	TiledMapLayer,
	ImageMapLayer,
} from '../../build';

import EsriLeafletGeoSearch from '../../plugins/EsriLeafletGeoSearch';
import HeatmapLayer from '../../plugins/HeatmapLayer';
import ClusterLayer from '../../plugins/ClusterLayer';

const Map = (props) => {
	// console.log(process.env.ARCGIS_API_KEY);
	return (
		<MapContainer id="mapId" zoom={7} center={[39.759, -88.157]}>
			<LayersControl position="topleft" collapsed={false}>
				<LayersControl.BaseLayer name="Tiled Map Layer">
					<TiledMapLayer url="https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_WUI_2010_01/MapServer" />
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer name="Base Map Layer" checked>
					<BasemapLayer name="DarkGray" />
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer name="Dynamic Map Layer">
					<DynamicMapLayer url="https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer" />
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer name="Image Map Layer">
					<ImageMapLayer
						url="https://landsat.arcgis.com/arcgis/rest/services/Landsat/PS/ImageServer"
						attribution="United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)"
					/>
				</LayersControl.BaseLayer>
				<LayersControl.Overlay name="Esri Feature Layer">
					<FeatureLayer
						url="https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0"
						eventHandlers={{
							loading: () => console.log('featurelayer loading'),
							load: () => console.log('featurelayer loaded'),
						}}
					/>
				</LayersControl.Overlay>
				<LayersControl.Overlay name="Esri Heatmap Layer">
					<HeatmapLayer
						url="https://sampleserver6.arcgisonline.com/arcgis/rest/services/CommunityAddressing/MapServer/0"
						radius={20}
						eventHandlers={{
							loading: () => console.log('loading heatmap'),
						}}
					/>
				</LayersControl.Overlay>
				<LayersControl.Overlay name="Esri Cluster Layer">
					<ClusterLayer url="https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer/0" />
				</LayersControl.Overlay>
			</LayersControl>

			<EsriLeafletGeoSearch
				position="topleft"
				useMapBounds={false}
				eventHandlers={{
					requeststart: () => console.log('Started request...'),
					requestend: () => console.log('Ended request...'),
					results: (r) => console.log(r),
				}}
			/>
		</MapContainer>
	);
};

export default Map;
