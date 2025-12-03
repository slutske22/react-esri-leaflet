import * as React from "react";
import * as EsriLeaflet from "esri-leaflet";
import { BasemapLayerOptions, Basemaps } from "esri-leaflet";
interface Props extends BasemapLayerOptions {
    name: Basemaps;
}
/**
 * @deprecated  BasemapLayer component, react-leaflet wrapper for [L.esri.BasemapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/basemap-layer/).
 *
 *  Esri-leaflet recommendes using [L.esri.Vector.vectorBasemapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/vector-basemap/) plugin instead ([`VectorBasemapLayer`](https://github.com/slutske22/react-esri-leaflet#vectorbasemaplayer-and-vectortilelayer) in react-esri-leaflet).
 */
declare const BasemapLayer: React.ForwardRefExoticComponent<Props & React.RefAttributes<EsriLeaflet.BasemapLayer>>;
export default BasemapLayer;
