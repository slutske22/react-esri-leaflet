import * as React from "react";
import Layer from "./EsriLeafletLayer";
import * as EsriLeaflet from "esri-leaflet";
import { BasemapLayerOptions, Basemaps } from "esri-leaflet";

interface Props extends BasemapLayerOptions {
  name: Basemaps;
}

const BasemapLayer = React.forwardRef<
  React.RefObject<EsriLeaflet.BasemapLayer>,
  Props
>((props: Props, ref) => (
  <Layer ref={ref} layerType="basemapLayer" {...props} />
));

export default BasemapLayer;
