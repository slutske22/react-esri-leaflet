import * as React from 'react';
import Layer from './EsriLeafletLayer';
import * as EsriLeaflet from 'esri-leaflet';
import { DynamicMapLayerOptions } from 'esri-leaflet';

const DynamicMapLayer = React.forwardRef<
	React.RefObject<EsriLeaflet.DynamicMapLayer>,
	DynamicMapLayerOptions
>((props: DynamicMapLayerOptions, ref) => (
	<Layer ref={ref} layerType="dynamicMapLayer" {...props} />
));

export default DynamicMapLayer;
