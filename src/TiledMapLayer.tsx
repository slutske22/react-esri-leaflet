import * as React from 'react';
import Layer from './EsriLeafletLayer';
import { TiledMapLayerOptions } from 'esri-leaflet';

const ImageMapLayer: React.FC<TiledMapLayerOptions> = React.forwardRef(
	(props: TiledMapLayerOptions, ref) => (
		<Layer ref={ref} layerType="tiledMapLayer" {...props} />
	)
);

export default ImageMapLayer;
