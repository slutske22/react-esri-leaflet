import * as Vector from "esri-leaflet-vector";
import { createLayerComponent } from "@react-leaflet/core";
import { updateEsriLayer } from "../build/EsriLeafletLayer";

interface VectorTileLayerProps extends L.Layer {
  url: string;
  apiKey?: string;
  token?: string;
  style?: Function;
}

const createEsriLayer = (props: VectorTileLayerProps, context) => {
  const instance = Vector.vectorTileLayer(props.url, { ...props });
  return { instance, context };
};

const VectorTileLayer = createLayerComponent(createEsriLayer, updateEsriLayer);

export default VectorTileLayer;
