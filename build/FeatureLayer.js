import * as React from "react";
import Layer from "./EsriLeafletLayer";
/**
 * FeatureLayer component, react-leaflet wrapper for [L.esri.FeatureLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/feature-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#components
 */
const FeatureLayer = React.forwardRef((props, ref) => (React.createElement(Layer, { ref: ref, layerType: "featureLayer", ...props })));
export default FeatureLayer;
