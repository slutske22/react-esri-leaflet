import * as React from 'react';
import Layer from './EsriLeafletLayer';
import { TiledMapLayerOptions } from 'esri-leaflet';

const ImageMapLayer: React.FC<TiledMapLayerOptions> = (
	props: TiledMapLayerOptions
) => <Layer layerType="tiledMapLayer" {...props} />;

export default ImageMapLayer;
