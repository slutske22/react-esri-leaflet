import "leaflet";
import "leaflet.heat";
import { LayerProps } from "@react-leaflet/core";
import { HeatMapOptions } from "leaflet";
interface Props extends HeatMapOptions, LayerProps {
    url: string;
    where?: string;
    fields?: string[];
    from?: Date | string;
    to?: Date | string;
    timeField?: boolean;
    timeFilterMode?: "server" | "client";
    precision?: number;
    token?: string;
    proxy?: string;
    useCors?: boolean;
}
/**
 * Heat.FeatureLayer component, react-leaflet wrapper for [L.esri.Heat.FeatureLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/heatmap-feature-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#heatmaplayer
 */
declare const HeatmapLayer: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<Heatmap.featureLayer>>;
export default HeatmapLayer;
