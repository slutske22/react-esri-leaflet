import * as React from 'react';
import { TiledMapLayerOptions } from 'esri-leaflet';
import Layer from './EsriLeafletLayer';

const TiledMapLayer: React.FC<TiledMapLayerOptions> = (
	props: TiledMapLayerOptions
) => <Layer layerType="tiledMapLayer" {...props} />;

export default TiledMapLayer;
