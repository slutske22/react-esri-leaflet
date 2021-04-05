import React, { useState } from 'react';
import {
	MapContainer,
	LayersControl,
	useMapEvents,
} from '../../node_modules/react-leaflet';

import {
	BasemapLayer,
	FeatureLayer,
	DynamicMapLayer,
	TiledMapLayer,
	ImageMapLayer,
} from 'react-esri-leaflet';

import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
import HeatmapLayer from 'react-esri-leaflet/plugins/HeatmapLayer';
import ClusterLayer from 'react-esri-leaflet/plugins/ClusterLayer';
import VectorBasemapLayer from 'react-esri-leaflet/plugins/VectorBasemapLayer';
import VectorTileLayer from 'react-esri-leaflet/plugins/VectorTileLayer';

const MapEvents = () => {
	const map = useMapEvents({
		click: (e) => console.log(e.latlng, map.getZoom()),
	});
	return null;
};

const Map = ({ apikey }) => {
	return (
		<MapContainer
			id="mapId"
			zoom={11}
			center={{ lat: 33.97180352632852, lng: -118.43073695898059 }}
		>
			<MapEvents />
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
				<LayersControl.BaseLayer name="Vector Basemap Layer (token required)">
					{apikey && (
						<VectorBasemapLayer name="ArcGIS:Streets" token={apikey} />
					)}
				</LayersControl.BaseLayer>
				<LayersControl.Overlay name="Esri Feature Layer">
					<FeatureLayer
						url="https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer/0"
						eventHandlers={{
							loading: () => console.log('featurelayer loading'),
							load: () => console.log('featurelayer loaded'),
						}}
					/>
				</LayersControl.Overlay>
				<LayersControl.Overlay name="Esri Heatmap Layer">
					<HeatmapLayer
						url="https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer/0"
						radius={20}
						eventHandlers={{
							loading: () => console.log('loading heatmap'),
						}}
					/>
				</LayersControl.Overlay>
				<LayersControl.Overlay name="Esri Cluster Layer">
					<ClusterLayer url="https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer/0" />
				</LayersControl.Overlay>
				<LayersControl.Overlay name="Vector Tile Layer">
					<VectorTileLayer url="https://vectortileservices3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Santa_Monica_Mountains_Parcels_VTL/VectorTileServer" />
				</LayersControl.Overlay>
			</LayersControl>

			<EsriLeafletGeoSearch
				position="topleft"
				useMapBounds={false}
				placeholder={
					apikey
						? 'Search for places or addresses'
						: 'Enter an API key in the upper right corner'
				}
				providers={{
					arcgisOnlineProvider: {
						apikey,
					},
					featureLayerProvider: {
						url:
							'https://services.arcgis.com/BG6nSlhZSAWtExvp/ArcGIS/rest/services/GIS_Day_Registration_Form_2019_Hosted_View_Layer/FeatureServer/0',
						searchFields: ['event_name', 'host_organization'],
						label: 'GIS Day Events 2019',
						bufferRadius: 5000,
						formatSuggestion: function (feature) {
							return (
								feature.properties.event_name +
								' - ' +
								feature.properties.host_organization
							);
						},
					},
				}}
				eventHandlers={{
					requeststart: () => console.log('Started request...'),
					requestend: () => console.log('Ended request...'),
					results: (r) => console.log(r),
				}}
				key={apikey}
			/>
		</MapContainer>
	);
};

export default Map;
