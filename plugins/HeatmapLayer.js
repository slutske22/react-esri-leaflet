import "leaflet";
import "leaflet.heat";
import * as Heatmap from "esri-leaflet-heatmap";
import { createLayerComponent } from "@react-leaflet/core";
const createEsriLayer = (props, context) => {
    const instance = new Heatmap.featureLayer({
        ...props,
    });
    return { instance, context };
};
const updateEsriLayer = (instance, props, prevProps) => {
    // basic layer setters for any leaflet layer:
    if (prevProps.url !== props.url) {
        if (instance.setUrl)
            instance.setUrl(props.url);
    }
    if (prevProps.opacity !== props.opacity) {
        if (instance.setOpacity)
            instance.setOpacity(props.opacity);
    }
    if (prevProps.zIndex !== props.zIndex) {
        if (instance.setZIndex)
            instance.setZIndex(props.zIndex);
    }
    // esri leaflet layer setters for all types:
    if (prevProps.to !== props.to || prevProps.from !== props.from) {
        if (instance.setTimeRange)
            instance.setTimeRange(props.to, props.from, props.setTimeCallback || null);
    }
    // feature layer setters:
    if (prevProps.style !== props.style) {
        if (instance.setStyle)
            instance.setStyle(props.style);
    }
    if (prevProps.where !== props.where) {
        if (instance.setWhere)
            instance.setWhere(props.where);
    }
};
/**
 * Heat.FeatureLayer component, react-leaflet wrapper for [L.esri.Heat.FeatureLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/heatmap-feature-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#heatmaplayer
 */
const HeatmapLayer = createLayerComponent(createEsriLayer, updateEsriLayer);
export default HeatmapLayer;
