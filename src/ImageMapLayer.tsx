import * as React from "react";
import Layer from "./EsriLeafletLayer";
import * as EsriLeaflet from "esri-leaflet";
import { RasterLayerOptions } from "esri-leaflet";

interface Props extends RasterLayerOptions {
  url: string;
  format?: string;
  bandIds?: string;
  noData?: number;
  noDataInterpretation?: string;
  pixelType?: string;
  renderingRule?: object;
  mosaicRule?: object;
  token?: string;
  proxy?: string;
  useCors?: boolean;
  to?: Date;
  from?: Date;
}

/**
 * ImageMapLayer component, react-leaflet wrapper for [L.esri.ImageMapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/image-map-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#components
 */
const ImageMapLayer = React.forwardRef<EsriLeaflet.RasterLayer, Props>(
  (props: Props, ref) => (
    <Layer ref={ref} layerType="imageMapLayer" {...props} />
  )
);

export default ImageMapLayer;
