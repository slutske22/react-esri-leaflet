import { createLayerComponent } from "@react-leaflet/core";
import * as Vector from "esri-leaflet-vector";
import { updateEsriLayer } from "../build/EsriLeafletLayer";
const createEsriLayer = (props, context) => {
    const instance = Vector.vectorBasemapLayer(props.name, { ...props });
    return { instance, context };
};
/**
 * VectorBasemapLayer component, react-leaflet wrapper for [L.esri.Vector.vectorBasemapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/vector-basemap/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#vectorbasemaplayer-and-vectortilelayer
 */
const VectorBasemapLayer = createLayerComponent(createEsriLayer, updateEsriLayer);
export default VectorBasemapLayer;
