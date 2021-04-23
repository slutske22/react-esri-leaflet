import React from 'react';
import { MapContainer } from 'react-leaflet';
import { BasemapLayer as VanillaBL } from 'esri-leaflet';
import { render } from '@testing-library/react';

import BasemapLayer from '../src/BasemapLayer';

describe('BasemapLayer', () => {
	//
	it('creates an instance of esri-leaflet basemapLayer and adds it to the map', () => {
		render(
			<MapContainer
				whenCreated={(map) => {
					// @ts-ignore // leaflet typings dont account for private properties like _layers
					const addedLayer = Object.values(map._layers)[0];
					expect(addedLayer).toBeInstanceOf(VanillaBL);
				}}
				center={[32, -117]}
				zoom={6}
			>
				<BasemapLayer name="Oceans" />
			</MapContainer>
		);
	});

	it('creates the same layer every time', () => {
		const { container } = render(
			<MapContainer center={[0, 0]} zoom={10}>
				<BasemapLayer name="Oceans" />
			</MapContainer>
		);

		expect(container).toMatchSnapshot();
	});
	//
});
