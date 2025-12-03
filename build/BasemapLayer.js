import * as React from "react";
import Layer from "./EsriLeafletLayer";
/**
 * @deprecated  BasemapLayer component, react-leaflet wrapper for [L.esri.BasemapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/basemap-layer/).
 *
 *  Esri-leaflet recommendes using [L.esri.Vector.vectorBasemapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/vector-basemap/) plugin instead ([`VectorBasemapLayer`](https://github.com/slutske22/react-esri-leaflet#vectorbasemaplayer-and-vectortilelayer) in react-esri-leaflet).
 */
const BasemapLayer = React.forwardRef((props, ref) => React.createElement(Layer, { ref: ref, layerType: "basemapLayer", ...props }));
export default BasemapLayer;
