import * as React from 'react';
import { RasterLayerOptions } from 'esri-leaflet';
import Layer from './EsriLeafletLayer';

const ImageMapLayer: React.FC<RasterLayerOptions> = (
	props: RasterLayerOptions
) => <Layer layerType="imageMapLayer" {...props} />;

export default ImageMapLayer;
