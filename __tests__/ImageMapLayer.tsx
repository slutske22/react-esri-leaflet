import React from 'react';
import { MapContainer } from 'react-leaflet';
import { RasterLayer } from 'esri-leaflet';
import { render } from '@testing-library/react';

import ImageMapLayer from '../src/ImageMapLayer';

describe('ImageMapLayer', () => {
	//
	it('creates an instance of esri-leaflet imageMapLayer and adds it to the map', () => {
		render(
			<MapContainer
				whenCreated={(map) => {
					// @ts-ignore // leaflet typings dont account for private properties like _layers
					const addedLayer = Object.values(map._layers)[0];
					expect(addedLayer).toBeInstanceOf(RasterLayer);
				}}
				center={[32, -117]}
				zoom={6}
			>
				<ImageMapLayer url="https://landsat.arcgis.com/arcgis/rest/services/Landsat/PS/ImageServer" />
			</MapContainer>
		);
	});

	it('creates the same layer every time', () => {
		const { container } = render(
			<MapContainer center={[0, 0]} zoom={10}>
				<ImageMapLayer url="https://landsat.arcgis.com/arcgis/rest/services/Landsat/PS/ImageServer" />
			</MapContainer>
		);

		expect(container).toMatchSnapshot();
	});
	//
});
