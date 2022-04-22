// import React from 'react';
// import { MapContainer, LayersControl, useMapEvents } from 'react-leaflet';

// // import {
// // 	BasemapLayer,
// // 	FeatureLayer,
// // 	DynamicMapLayer,
// // 	TiledMapLayer,
// // 	ImageMapLayer,
// // } from 'react-esri-leaflet';

// // import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
// // import HeatmapLayer from 'react-esri-leaflet/plugins/HeatmapLayer';
// // import ClusterLayer from 'react-esri-leaflet/plugins/ClusterLayer';
// // import VectorBasemapLayer from 'react-esri-leaflet/plugins/VectorBasemapLayer';
// // import VectorTileLayer from 'react-esri-leaflet/plugins/VectorTileLayer';

// Alternative imports for local build tests:
import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  MapContainer,
  LayersControl,
  useMapEvents,
} from "../../../node_modules/react-leaflet";

import {
  BasemapLayer,
  FeatureLayer,
  DynamicMapLayer,
  TiledMapLayer,
  ImageMapLayer,
} from "../../../build";

import EsriLeafletGeoSearch from "../../../plugins/EsriLeafletGeoSearch";
import HeatmapLayer from "../../../plugins/HeatmapLayer";
import ClusterLayer from "../../../plugins/ClusterLayer";
import VectorBasemapLayer from "../../../plugins/VectorBasemapLayer";
import VectorTileLayer from "../../../plugins/VectorTileLayer";
import { useState, useRef } from "react";
import { CodeSamples } from "./CodeSamples";
import { Control } from "leaflet";
import { GeoSearch, Layers } from "./MapComponents";

const MapEvents = () => {
  const map = useMapEvents({
    click: (e) => console.log(e.latlng, map.getZoom()),
  });
  return null;
};

/**
 * Central map component of react-esri-leaflet example
 */
const Map = ({ apikey }) => {
  /**
   * Create ref as state variable.  Once ready, we use a react portal to inject `See Code` markup
   */
  const [layersControlRef, setLayersControlRef] = useState<Control.Layers>();

  return (
    <>
      <MapContainer
        id="mapId"
        zoom={11}
        center={{ lat: 33.97180352632852, lng: -118.43073695898059 }}
      >
        <MapEvents />
        <GeoSearch apikey={apikey} />
        <Layers apikey={apikey} setLayersControlRef={setLayersControlRef} />
      </MapContainer>

      {layersControlRef && (
        <CodeSamples
          apikey={apikey}
          container={layersControlRef.getContainer()}
        />
      )}
    </>
  );
};

export default Map;
