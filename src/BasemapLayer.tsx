import * as React from 'react';
import Layer from './EsriLeafletLayer';
import { BasemapLayerOptions, Basemaps } from 'esri-leaflet';

interface Props extends BasemapLayerOptions {
	name: Basemaps;
}

const BasemapLayer: React.FC<Props> = (props: Props) => (
	<Layer layerType="basemapLayer" {...props} />
);

export default BasemapLayer;
