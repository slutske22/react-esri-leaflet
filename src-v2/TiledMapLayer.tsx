import * as React from 'react';
import { TiledMapLayerOptions } from 'esri-leaflet';
import Layer from './EsriLeafletLayer';

const TiledMapLayer = (props: TiledMapLayerOptions) => (
	<Layer layerType="tiledMapLayer" {...props} />
);

export default TiledMapLayer;
