import * as React from "react";
import Layer from "./EsriLeafletLayer";
import * as EsriLeaflet from "esri-leaflet";
import { FeatureLayerOptions } from "esri-leaflet";
import { EsriServiceEvent } from "./types";

type FeatureLayerEvents =
  | EsriServiceEvent
  | "loading"
  | "load"
  | "createfeature"
  | "removefeature"
  | "addfeature"
  | "click"
  | "dblclick"
  | "mouseover"
  | "mouseout"
  | "mousemove"
  | "contextmenu"
  | "popupopen"
  | "popupclose";

interface FeatureLayerProps extends FeatureLayerOptions {
  eventHandlers?: {
    [key in FeatureLayerEvents]?: Function;
  };
}

/**
 * FeatureLayer component, react-leaflet wrapper for [L.esri.FeatureLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/feature-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#components
 */
const FeatureLayer = React.forwardRef<
  EsriLeaflet.FeatureLayer,
  FeatureLayerProps
>((props: FeatureLayerProps, ref) => (
  <Layer ref={ref} layerType="featureLayer" {...props} />
));

export default FeatureLayer;
