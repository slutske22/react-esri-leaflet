import * as React from 'react';
import Layer from './EsriLeafletLayer';
import { DynamicMapLayerOptions } from 'esri-leaflet';

const DynamicMapLayer: React.FC<DynamicMapLayerOptions> = (
	props: DynamicMapLayerOptions
) => <Layer layerType="dynamicMapLayer" {...props} />;

export default DynamicMapLayer;
