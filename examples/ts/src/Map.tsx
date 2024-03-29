import React from "react";
import { MapContainer, useMapEvents } from "react-leaflet";
import { Control } from "leaflet";

// import {
// 	BasemapLayer,
// 	FeatureLayer,
// 	DynamicMapLayer,
// 	TiledMapLayer,
// 	ImageMapLayer,
// } from 'react-esri-leaflet';

// import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
// import HeatmapLayer from 'react-esri-leaflet/plugins/HeatmapLayer';
// import ClusterLayer from 'react-esri-leaflet/plugins/ClusterLayer';
// import VectorBasemapLayer from 'react-esri-leaflet/plugins/VectorBasemapLayer';
// import VectorTileLayer from 'react-esri-leaflet/plugins/VectorTileLayer';

// Alternative imports for local build tests:
// import React, { useState } from "react";
// import { Control } from "leaflet";

// import {
//   MapContainer,
//   useMapEvents,
// } from "../../../node_modules/react-leaflet";

import { CodeSamples } from "./CodeSamples";
import { GeoSearch, Layers } from "./MapComponents";
import { useState } from "react";

/**
 * Convenience component to track events on map
 */
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
        <Layers apikey={apikey} setLayersControlRef={setLayersControlRef} />
        <GeoSearch apikey={apikey} />
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
