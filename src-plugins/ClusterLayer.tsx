import "leaflet";
import * as EL from "esri-leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import Cluster from "esri-leaflet-cluster";
import { createLayerComponent } from "@react-leaflet/core";
import { MarkerClusterGroupOptions } from "leaflet";

interface Props extends MarkerClusterGroupOptions {
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

const createEsriLayer = (props: Props, context) => {
  const instance = Cluster({
    ...props,
  });

  return { instance, context };
};

const updateEsriLayer = (instance, props, prevProps) => {
  // basic layer setters for any leaflet layer:
  if (prevProps.url !== props.url) {
    if (instance.setUrl) instance.setUrl(props.url);
  }
  if (prevProps.opacity !== props.opacity) {
    if (instance.setOpacity) instance.setOpacity(props.opacity);
  }
  if (prevProps.zIndex !== props.zIndex) {
    if (instance.setZIndex) instance.setZIndex(props.zIndex);
  }

  // esri leaflet layer setters for all types:
  if (prevProps.to !== props.to || prevProps.from !== props.from) {
    if (instance.setTimeRange)
      instance.setTimeRange(
        props.to,
        props.from,
        props.setTimeCallback || null
      );
  }

  // feature layer setters:
  if (prevProps.style !== props.style) {
    if (instance.setStyle) instance.setStyle(props.style);
  }
  if (prevProps.where !== props.where) {
    if (instance.setWhere) instance.setWhere(props.where);
  }
};

/**
 * Cluster.FeatureLayer component, react-leaflet wrapper for [L.esri.Cluster.FeatureLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/cluster-feature-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#clusterlayer
 */
const ClusterLayer = createLayerComponent(createEsriLayer, updateEsriLayer);

export default ClusterLayer;
