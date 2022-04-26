import React from "react";
import { MapContainer } from "react-leaflet";
import { BasemapLayer as VanillaBL } from "esri-leaflet";
import { render } from "@testing-library/react";

import BasemapLayer from "../src/BasemapLayer";

describe("BasemapLayer", () => {
  let mapRef;

  it("creates an instance of esri-leaflet basemapLayer and adds it to the map", () => {
    render(
      <MapContainer
        ref={(ref) => {
          mapRef = ref;
        }}
        center={[32, -117]}
        zoom={6}
      >
        <BasemapLayer name="Oceans" />
      </MapContainer>
    );

    const addedLayer = Object.values(mapRef._layers)[0];
    expect(addedLayer).toBeInstanceOf(VanillaBL);
  });

  it("creates the same layer every time", () => {
    const { container } = render(
      <MapContainer center={[0, 0]} zoom={10}>
        <BasemapLayer name="Oceans" />
      </MapContainer>
    );

    expect(container).toMatchSnapshot();
  });
  //
});
