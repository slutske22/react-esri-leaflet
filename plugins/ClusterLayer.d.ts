import "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { LayerProps } from "@react-leaflet/core";
import { MarkerClusterGroupOptions } from "leaflet";
interface Props extends MarkerClusterGroupOptions, LayerProps {
    url: string;
    pointToLayer?: Function;
    style?: Function;
    onEachFeature?: Function;
    where?: string;
    fields?: string[];
    from?: Date | string;
    to?: Date | string;
    timeField?: boolean;
    timeFilterMode?: "server" | "client";
    simplifyFactor?: number;
    precision?: number;
    token?: string;
    proxy?: string;
    useCors?: boolean;
}
/**
 * Cluster.FeatureLayer component, react-leaflet wrapper for [L.esri.Cluster.FeatureLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/cluster-feature-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#clusterlayer
 */
declare const ClusterLayer: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<Cluster>>;
export default ClusterLayer;
