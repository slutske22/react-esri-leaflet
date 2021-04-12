import * as React from 'react';
import * as L from 'leaflet';
import * as EL from 'esri-leaflet';

/**
 * Native esri-leaflet components
 */

interface BasemapLayerProps extends EL.BasemapLayerOptions {
	name: EL.Basemaps;
}

declare const BasemapLayer: React.FC<BasemapLayerProps>;

declare const FeatureLayer: React.FC<EL.FeatureLayerOptions>;

declare const DynamicMapLayer: React.FC<EL.DynamicMapLayerOptions>;

declare const ImageMapLayer: React.FC<EL.RasterLayerOptions>;

declare const TiledMapLayer: React.FC<EL.TiledMapLayerOptions>;

/**
 * Plugins:
 */
interface VectorTileLayerProps extends L.Layer {
	apiKey?: string;
	token?: string;
	style?: Function;
}

declare const VectorTileLayer: React.FC<VectorTileLayerProps>;

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
	| 'ArcGIS:ModernAntique:Base';

interface VectorBasemapLayerProps extends L.Layer {
	name: BasemapStyles;
	apiKey?: string;
	token?: string;
}

declare const VectorBasemapLayer: React.FC<VectorBasemapLayerProps>;
