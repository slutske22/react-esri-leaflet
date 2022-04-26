import React from "react";
import { MapContainer } from "react-leaflet";
import { TiledMapLayer as VanillaTL } from "esri-leaflet";
import { render } from "@testing-library/react";

import TiledMapLayer from "../src/TiledMapLayer";

describe("TiledMapLayer", () => {
  let mapRef;

  it("creates an instance of esri-leaflet tiledMapLayer and adds it to the map", () => {
    render(
      <MapContainer
        ref={(ref) => {
          mapRef = ref;
        }}
        center={[32, -117]}
        zoom={6}
      >
        <TiledMapLayer url="https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_WUI_2010_01/MapServer" />
      </MapContainer>
    );

    const addedLayer = Object.values(mapRef._layers)[0];
    expect(addedLayer).toBeInstanceOf(VanillaTL);
  });

  it("creates the same layer every time", () => {
    const { container } = render(
      <MapContainer center={[0, 0]} zoom={10}>
        <TiledMapLayer url="https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_WUI_2010_01/MapServer" />
      </MapContainer>
    );

    expect(container).toMatchSnapshot();
  });
  //
});
