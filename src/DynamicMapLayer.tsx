import * as React from "react";
import Layer from "./EsriLeafletLayer";
import * as EsriLeaflet from "esri-leaflet";
import { DynamicMapLayerOptions } from "esri-leaflet";

/**
 * DynamicMapLayer component, react-leaflet wrapper for [L.esri.DynamicMapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/dynamic-map-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#components
 */
const DynamicMapLayer = React.forwardRef<
  EsriLeaflet.DynamicMapLayer,
  DynamicMapLayerOptions
>((props: DynamicMapLayerOptions, ref) => (
  <Layer ref={ref} layerType="dynamicMapLayer" {...props} />
));

export default DynamicMapLayer;
