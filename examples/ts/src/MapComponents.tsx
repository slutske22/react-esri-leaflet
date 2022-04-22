import React, { useState, useRef } from "react";
import { Control } from "leaflet";

import { LayersControl } from "../../../node_modules/react-leaflet";

import {
  BasemapLayer,
  FeatureLayer,
  DynamicMapLayer,
  TiledMapLayer,
  ImageMapLayer,
} from "../../../build";

import HeatmapLayer from "../../../plugins/HeatmapLayer";
import ClusterLayer from "../../../plugins/ClusterLayer";
import VectorBasemapLayer from "../../../plugins/VectorBasemapLayer";
import VectorTileLayer from "../../../plugins/VectorTileLayer";
import EsriLeafletGeoSearch from "../../../plugins/EsriLeafletGeoSearch";

interface Props {
  apikey: string;
}

/**
 * EsriLeafletGeoSearch example component
 */
export const GeoSearch: React.FC<Props> = ({ apikey }: Props) => {
  return (
    <EsriLeafletGeoSearch
      position="topleft"
      useMapBounds={false}
      placeholder={
        apikey
          ? "Search for places or addresses"
          : "Enter an API key in the upper right corner"
      }
      providers={{
        arcgisOnlineProvider: {
          apikey,
        },
        featureLayerProvider: {
          url: "https://services.arcgis.com/BG6nSlhZSAWtExvp/ArcGIS/rest/services/GIS_Day_Registration_Form_2019_Hosted_View_Layer/FeatureServer/0",
          searchFields: ["event_name", "host_organization"],
          label: "GIS Day Events 2019",
          bufferRadius: 5000,
          formatSuggestion: function (feature) {
            return (
              feature.properties.event_name +
              " - " +
              feature.properties.host_organization
            );
          },
        },
      }}
      eventHandlers={{
        requeststart: () => console.log("Started request..."),
        requestend: () => console.log("Ended request..."),
        results: (r) => console.log(r),
      }}
      key={apikey}
    />
  );
};

interface LayersProps extends Props {
  setLayersControlRef: React.Dispatch<React.SetStateAction<Control.Layers>>;
}

/**
 * LayersControl example containing all react-esri-leaflet layer examples
 */
export const Layers: React.FC<LayersProps> = ({
  apikey,
  setLayersControlRef,
}: LayersProps) => {
  const layerControlRef = useRef<Control.Layers>();

  const featureLayerRef = useRef();

  return (
    <LayersControl
      position="topleft"
      collapsed={false}
      ref={(ref) => {
        // @ts-ignore refs are hard sometimes
        layerControlRef.current = ref;
        setLayersControlRef(layerControlRef.current);
      }}
    >
      <LayersControl.BaseLayer name="Tiled Map Layer">
        <TiledMapLayer url="https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_WUI_2010_01/MapServer" />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Base Map Layer" checked>
        <BasemapLayer name="DarkGray" />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Dynamic Map Layer">
        <DynamicMapLayer
          // ref={dmlRef}
          url="https://maps7.arcgisonline.com/arcgis/rest/services/USDA_USFS_2014_Wildfire_Hazard_Potential/MapServer"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Image Map Layer">
        <ImageMapLayer
          url="https://landsat.arcgis.com/arcgis/rest/services/Landsat/PS/ImageServer"
          attribution="United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Vector Basemap Layer (token required)">
        {apikey && <VectorBasemapLayer name="ArcGIS:Streets" token={apikey} />}
      </LayersControl.BaseLayer>
      <LayersControl.Overlay name="Esri Feature Layer">
        <FeatureLayer
          ref={featureLayerRef}
          url="https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer/0"
          eventHandlers={{
            loading: () => console.log("featurelayer loading"),
            load: () => {
              console.log("featurelayer loaded");
              if (featureLayerRef && featureLayerRef.current) {
                // @ts-ignore
                featureLayerRef.current.metadata((error, data) => {
                  console.log("featurelayer metadata:", data);
                });
              }
            },
          }}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Esri Heatmap Layer">
        <HeatmapLayer
          url="https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer/0"
          radius={20}
          eventHandlers={{
            loading: () => console.log("loading heatmap"),
          }}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Esri Cluster Layer">
        <ClusterLayer url="https://services8.arcgis.com/3Y7J7SmaNLGLT6ec/arcgis/rest/services/2020_Protests_with_Location/FeatureServer/0" />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Vector Tile Layer">
        <VectorTileLayer url="https://vectortileservices3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Santa_Monica_Mountains_Parcels_VTL/VectorTileServer" />
      </LayersControl.Overlay>
    </LayersControl>
  );
};
