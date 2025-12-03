import * as React from "react";
import Layer from "./EsriLeafletLayer";
/**
 * DynamicMapLayer component, react-leaflet wrapper for [L.esri.DynamicMapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/dynamic-map-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#components
 */
const DynamicMapLayer = React.forwardRef((props, ref) => (React.createElement(Layer, { ref: ref, layerType: "dynamicMapLayer", ...props })));
export default DynamicMapLayer;
