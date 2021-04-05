import React from 'react';
import { MapContainer } from 'react-leaflet';
import { vectorBasemapLayer } from 'esri-leaflet-vector';
import { render } from '@testing-library/react';
import VectorBasemapLayer from '../src-plugins/VectorBasemapLayer';

jest.mock('esri-leaflet-vector', () => ({
	vectorBasemapLayer: jest.fn(),
}));

describe('VectorBasemapLayer', () => {
	//
	beforeEach(() => {
		jest.clearAllMocks();

		vectorBasemapLayer.mockImplementation(() => ({
			_layerAdd: jest.fn(),
			onRemove: jest.fn(),
			fire: jest.fn(),
			_check: 'this is the layer that was added',
		}));
	});

	it('creates an instance of esri-leaflet vectorBasemapLayer and adds it to the map', () => {
		render(
			<MapContainer
				whenCreated={(map) => {
					const addedLayer = Object.values(map._layers)[0];
					expect(addedLayer._check).toEqual(vectorBasemapLayer()._check);
				}}
				center={[32, -117]}
				zoom={6}
			>
				<VectorBasemapLayer name="ArcGIS:Streets" token="some_api_key" />
			</MapContainer>
		);
	});

	it('creates the same layer every time', () => {
		const { container } = render(
			<MapContainer center={[0, 0]} zoom={10}>
				<VectorBasemapLayer name="ArcGIS:Streets" token="some_api_key" />
			</MapContainer>
		);

		expect(container).toMatchSnapshot();
	});
	//
});
