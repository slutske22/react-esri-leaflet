import * as React from "react";
import Layer from "./EsriLeafletLayer";
/**
 * TiledMapLayer component, react-leaflet wrapper for [L.esri.TiledMapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/tiled-map-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#components
 */
const TiledMapLayer = React.forwardRef((props, ref) => (React.createElement(Layer, { ref: ref, layerType: "tiledMapLayer", ...props })));
export default TiledMapLayer;
