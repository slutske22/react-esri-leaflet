import React, { useRef } from "react";
import { Control } from "leaflet";

import { LayersControl } from "react-leaflet";
import * as EL from "esri-leaflet";

import {
  BasemapLayer,
  FeatureLayer,
  DynamicMapLayer,
  TiledMapLayer,
  ImageMapLayer,
} from "react-esri-leaflet";

import HeatmapLayer from "react-esri-leaflet/plugins/HeatmapLayer";
import ClusterLayer from "react-esri-leaflet/plugins/ClusterLayer";
import VectorBasemapLayer from "react-esri-leaflet/plugins/VectorBasemapLayer";
import VectorTileLayer from "react-esri-leaflet/plugins/VectorTileLayer";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
import {
  CL_URL,
  DML_URL,
  FLP_URL,
  FL_URL,
  HML_URL,
  IML_URL,
  TML_URL,
  VTL_URL,
} from "./constants";

interface Props {
  apikey: string;
}

/**
 * EsriLeafletGeoSearch example component
 */
export const GeoSearch: React.FC<Props> = ({ apikey }: Props) => {
  /**
   * Ref is typed as EL.Geocoding.GeosearchControl
   */
  const geosearchControlRef = useRef<EL.Geocoding.GeosearchControl>();
  if (!apikey) {
    geosearchControlRef.current?.disable();
  } else {
    geosearchControlRef.current?.enable();
  }

  return (
    <EsriLeafletGeoSearch
      ref={geosearchControlRef}
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
          url: FLP_URL,
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
        requeststart: () => {
          console.log(
            `%c <EsriLeafletGeoSearch />: Started request...`,
            "font-weight: bold"
          );
        },
        requestend: () => {
          console.log(
            `%c <EsriLeafletGeoSearch />: Ended request...`,
            "font-weight: bold"
          );
        },
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
  /** Ref to the leaflet Layers.Control control component */
  const layerControlRef = useRef<Control.Layers>();

  /**
   * Following list of refs shows how to properly type ref values in typescript
   */
  const tiledMapLayerRef = useRef<EL.TiledMapLayer>();
  const featureLayerRef = useRef<EL.FeatureLayer>();
  const dynamicMapLayerRef = useRef<EL.DynamicMapLayer>();
  const basemapLayerRef = useRef<EL.BasemapLayer>();
  const imageMapLayerRef = useRef<EL.RasterLayer>();

  /**
   * The following plugins don't have TS definitions publicly available, so you're on your own!
   */
  const vectorBasemapLayerRef = useRef();
  const vectorTileLayerRef = useRef();
  const clusterLayerRef = useRef();
  const heatmapLayerRef = useRef();

  tiledMapLayerRef.current?.once("add", () => {
    console.log(`%c <TiledMapLayer /> added:`, "font-weight: bold");
    console.log(tiledMapLayerRef.current);
  });
  featureLayerRef.current?.once("add", () => {
    console.log(`%c <FeatureLayer /> added:`, "font-weight: bold");
    console.log(featureLayerRef.current);
  });
  dynamicMapLayerRef.current?.once("add", () => {
    console.log(`%c <DynamicMapLayer /> added:`, "font-weight: bold");
    console.log(dynamicMapLayerRef.current);
  });
  basemapLayerRef.current?.once("add", () => {
    console.log(`%c <BaseMapLayer /> added:`, "font-weight: bold");
    console.log(basemapLayerRef.current);
  });
  imageMapLayerRef.current?.once("add", () => {
    console.log(`%c <ImageMapLayer /> added:`, "font-weight: bold");
    console.log(imageMapLayerRef.current);
  });
  // @ts-expect-error No TS defs available
  vectorBasemapLayerRef.current?.once("add", () => {
    console.log(`%c <VectorBasemapLayer /> added:`, "font-weight: bold");
    console.log(vectorBasemapLayerRef.current);
  });
  // @ts-expect-error No TS defs available
  vectorTileLayerRef.current?.once("add", () => {
    console.log(`%c <VectorTileLayer /> added:`, "font-weight: bold");
    console.log(vectorTileLayerRef.current);
  });
  // @ts-expect-error No TS defs available
  clusterLayerRef.current?.once("add", () => {
    console.log(`%c <ClusterLayer /> added:`, "font-weight: bold");
    console.log(clusterLayerRef.current);
  });
  // @ts-expect-error No TS defs available
  heatmapLayerRef.current?.once("add", () => {
    console.log(`%c <HeatmapLayer /> added:`, "font-weight: bold");
    console.log(heatmapLayerRef.current);
  });

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
        <TiledMapLayer ref={tiledMapLayerRef} url={TML_URL} />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer name="Base Map Layer" checked>
        <BasemapLayer ref={basemapLayerRef} name="DarkGray" />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer name="Dynamic Map Layer">
        <DynamicMapLayer ref={dynamicMapLayerRef} url={DML_URL} />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Image Map Layer">
        <ImageMapLayer
          ref={imageMapLayerRef}
          url={IML_URL}
          attribution="United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Vector Basemap Layer (token required)">
        {apikey && (
          <VectorBasemapLayer
            ref={vectorBasemapLayerRef}
            name="ArcGIS:Streets"
            token={apikey}
          />
        )}
      </LayersControl.BaseLayer>
      <LayersControl.Overlay name="Esri Feature Layer">
        <FeatureLayer
          ref={featureLayerRef}
          url={FL_URL}
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
          ref={heatmapLayerRef}
          url={HML_URL}
          // @ts-ignore // radius doesn't exist on this because there are no typings for it
          radius={20}
          eventHandlers={{
            loading: () => console.log("loading heatmap"),
          }}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Esri Cluster Layer">
        <ClusterLayer ref={clusterLayerRef} url={CL_URL} />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Vector Tile Layer">
        <VectorTileLayer ref={vectorTileLayerRef} url={VTL_URL} />
      </LayersControl.Overlay>
    </LayersControl>
  );
};
