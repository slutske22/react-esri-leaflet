import * as React from 'react';
import Layer from './EsriLeafletLayer';
import { DynamicMapLayerOptions } from 'esri-leaflet';

const DynamicMapLayer: React.FC<DynamicMapLayerOptions> = React.forwardRef(
	(props: DynamicMapLayerOptions, ref) => (
		<Layer ref={ref} layerType="dynamicMapLayer" {...props} />
	)
);

export default DynamicMapLayer;
