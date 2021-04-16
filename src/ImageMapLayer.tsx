import * as React from 'react';
import Layer from './EsriLeafletLayer';
import { RasterLayerOptions } from 'esri-leaflet';

const ImageMapLayer: React.FC<RasterLayerOptions> = (
	props: RasterLayerOptions
) => <Layer layerType="imageMapLayer" {...props} />;

export default ImageMapLayer;
