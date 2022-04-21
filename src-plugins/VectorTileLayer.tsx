import * as Vector from "esri-leaflet-vector";
import { createLayerComponent, LayerProps } from "@react-leaflet/core";
import { updateEsriLayer } from "../build/EsriLeafletLayer";

interface VectorTileLayerProps extends LayerProps {
  url: string;
  apiKey?: string;
  token?: string;
  style?: Function;
}

const createEsriLayer = (props: VectorTileLayerProps, context) => {
  const instance = Vector.vectorTileLayer(props.url, { ...props });
  return { instance, context };
};

/**
 * VectorTileLayer component, react-leaflet wrapper for [L.esri.Vector.vectorTileLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/vector-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#vectorbasemaplayer-and-vectortilelayer
 */
const VectorTileLayer = createLayerComponent<
  Vector.vectorTileLayer,
  VectorTileLayerProps
>(createEsriLayer, updateEsriLayer);

export default VectorTileLayer;
