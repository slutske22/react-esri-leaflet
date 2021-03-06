import * as React from 'react';
import { BasemapLayerOptions, Basemaps } from 'esri-leaflet';
import Layer from './EsriLeafletLayer';

interface Props extends BasemapLayerOptions {
	name: Basemaps;
}

const BasemapLayer: React.FC<Props> = (props: Props) => (
	<Layer layerType="basemapLayer" {...props} />
);

export default BasemapLayer;
