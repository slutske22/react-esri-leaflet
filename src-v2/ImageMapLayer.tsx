import * as React from 'react';
import { RasterLayerOptions } from 'esri-leaflet';
import Layer from './EsriLeafletLayer';

const ImageMapLayer = (props: RasterLayerOptions) => (
	<Layer layerType="imageMapLayer" {...props} />
);

export default ImageMapLayer;
