import React from 'react';
import { MapContainer } from 'react-leaflet';
import { DynamicMapLayer as VanillaDL } from 'esri-leaflet';
import { render } from '@testing-library/react';

import DynamicMapLayer from '../src/DynamicMapLayer';

describe('DynamicMapLayer', () => {
	//
	it('creates an instance of esri-leaflet dynamicMapLayer and adds it to the map', () => {
		render(
			<MapContainer
				whenCreated={(map) => {
					// @ts-ignore // leaflet typings dont account for private properties like _layers
					const addedLayer = Object.values(map._layers)[0];
					expect(addedLayer).toBeInstanceOf(VanillaDL);
				}}
				center={[32, -117]}
				zoom={6}
			>
				<DynamicMapLayer url="https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer" />
			</MapContainer>
		);
	});

	it('creates the same layer every time', () => {
		const { container } = render(
			<MapContainer center={[0, 0]} zoom={10}>
				<DynamicMapLayer url="https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer" />
			</MapContainer>
		);

		expect(container).toMatchSnapshot();
	});
	//
});
