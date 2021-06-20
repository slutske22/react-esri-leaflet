import * as React from 'react';
import Layer from './EsriLeafletLayer';
import { BasemapLayerOptions, Basemaps } from 'esri-leaflet';

interface Props extends BasemapLayerOptions {
	name: Basemaps;
}

const BasemapLayer: React.FC<Props> = React.forwardRef((props: Props, ref) => (
	<Layer ref={ref} layerType="basemapLayer" {...props} />
));

export default BasemapLayer;
