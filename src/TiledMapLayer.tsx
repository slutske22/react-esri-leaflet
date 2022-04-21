import * as React from "react";
import Layer from "./EsriLeafletLayer";
import * as EsriLeaflet from "esri-leaflet";
import { TiledMapLayerOptions } from "esri-leaflet";

const TiledMapLayer = React.forwardRef<
  React.RefObject<EsriLeaflet.TiledMapLayer>,
  TiledMapLayerOptions
>((props: TiledMapLayerOptions, ref) => (
  <Layer ref={ref} layerType="tiledMapLayer" {...props} />
));

export default TiledMapLayer;
