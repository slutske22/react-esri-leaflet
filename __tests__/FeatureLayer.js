import React from 'react';
import { MapContainer } from 'react-leaflet';
import { render } from '@testing-library/react';

import FeatureLayer from '../src/FeatureLayer';

describe('FeatureLayer', () => {
	it('adds an esri-leaflet featurelayer to the map', () => {
		const { container } = render(
			<MapContainer center={[32, -117]} zoom={6}>
				<FeatureLayer url="https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0" />
			</MapContainer>
		);

		expect(container).toMatchSnapshot();
	});
});
