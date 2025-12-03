import * as React from "react";
import Layer from "./EsriLeafletLayer";
/**
 * ImageMapLayer component, react-leaflet wrapper for [L.esri.ImageMapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/image-map-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#components
 */
const ImageMapLayer = React.forwardRef((props, ref) => (React.createElement(Layer, { ref: ref, layerType: "imageMapLayer", ...props })));
export default ImageMapLayer;
