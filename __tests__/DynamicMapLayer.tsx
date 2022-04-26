import React from "react";
import { MapContainer } from "react-leaflet";
import { DynamicMapLayer as VanillaDL } from "esri-leaflet";
import { render } from "@testing-library/react";

import DynamicMapLayer from "../src/DynamicMapLayer";

describe("DynamicMapLayer", () => {
  let mapRef;

  it("creates an instance of esri-leaflet dynamicMapLayer and adds it to the map", () => {
    render(
      <MapContainer
        ref={(ref) => {
          mapRef = ref;
        }}
        center={[32, -117]}
        zoom={6}
      >
        <DynamicMapLayer url="https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer" />
      </MapContainer>
    );

    const addedLayer = Object.values(mapRef._layers)[0];
    expect(addedLayer).toBeInstanceOf(VanillaDL);
  });

  it("creates the same layer every time", () => {
    const { container } = render(
      <MapContainer center={[0, 0]} zoom={10}>
        <DynamicMapLayer url="https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer" />
      </MapContainer>
    );

    expect(container).toMatchSnapshot();
  });
  //
});
