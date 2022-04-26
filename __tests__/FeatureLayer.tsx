import * as React from "react";
import { FeatureLayer as VanillaFL } from "esri-leaflet";
import { MapContainer } from "react-leaflet";
import { render } from "@testing-library/react";

import FeatureLayer from "../src/FeatureLayer";

describe("FeatureLayer", () => {
  it("creates an instance of esri-leaflet featurelayer and adds it to the map", () => {
    let mapRef;

    render(
      <MapContainer
        ref={(ref) => {
          mapRef = ref;
        }}
        center={[32, -117]}
        zoom={6}
      >
        <FeatureLayer url="https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0" />
      </MapContainer>
    );

    const addedLayer = Object.values(mapRef._layers)[0];
    expect(addedLayer).toBeInstanceOf(VanillaFL);
  });
});
