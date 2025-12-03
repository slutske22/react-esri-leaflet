import { LayerProps } from "@react-leaflet/core";
interface VectorTileLayerProps extends LayerProps {
    url: string;
    apiKey?: string;
    token?: string;
    style?: Function;
}
/**
 * VectorTileLayer component, react-leaflet wrapper for [L.esri.Vector.vectorTileLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/vector-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#vectorbasemaplayer-and-vectortilelayer
 */
declare const VectorTileLayer: import("react").ForwardRefExoticComponent<VectorTileLayerProps & import("react").RefAttributes<any>>;
export default VectorTileLayer;
