import React from "react";
import { MapContainer } from "react-leaflet";
import { vectorTileLayer } from "esri-leaflet-vector";
import { render } from "@testing-library/react";
import VectorTileLayer from "../src-plugins/VectorTileLayer";

jest.mock("esri-leaflet-vector", () => ({
  vectorTileLayer: jest.fn(),
}));

describe("VectorTileLayer", () => {
  //
  beforeEach(() => {
    jest.clearAllMocks();

    vectorTileLayer.mockImplementation(() => ({
      _layerAdd: jest.fn(),
      onRemove: jest.fn(),
      fire: jest.fn(),
      _check: "this is the layer that was added",
    }));
  });

  it("creates an instance of esri-leaflet vectorTileLayer and adds it to the map", () => {
    let mapRef;

    render(
      <MapContainer
        ref={(ref) => {
          mapRef = ref;
        }}
        center={[32, -117]}
        zoom={6}
      >
        <VectorTileLayer url="some_url" />
      </MapContainer>
    );

    const addedLayer = Object.values(mapRef._layers)[0];
    // @ts-ignore // leaflet typings dont account for private properties like _check
    expect(addedLayer._check).toEqual(vectorTileLayer()._check);
  });

  it("creates the same layer every time", () => {
    const { container } = render(
      <MapContainer center={[0, 0]} zoom={10}>
        <VectorTileLayer url="some_url" />
      </MapContainer>
    );

    expect(container).toMatchSnapshot();
  });
  //
});
