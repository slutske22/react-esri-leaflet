import React from 'react';
import { MapContainer } from 'react-leaflet';
import { render } from '@testing-library/react';

import BasemapLayer from '../src/BasemapLayer';

describe('BasemapLayer', () => {
	it('adds an esri-leaflet basemap to the map', () => {
		const { container } = render(
			<MapContainer center={[0, 0]} zoom={10}>
				<BasemapLayer name="Oceans" />
			</MapContainer>
		);

		expect(container).toMatchSnapshot();
	});
});
