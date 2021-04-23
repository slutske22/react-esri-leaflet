import * as React from 'react';
import { DynamicMapLayerOptions } from 'esri-leaflet';
import Layer from './EsriLeafletLayer';

const DynamicMapLayer: React.FC<DynamicMapLayerOptions> = (
	props: DynamicMapLayerOptions
) => <Layer layerType="dynamicMapLayer" {...props} />;

export default DynamicMapLayer;
