import * as React from 'react';
import { FeatureLayerOptions } from 'esri-leaflet';
import Layer from './EsriLeafletLayer';

const FeatureLayer = (props: FeatureLayerOptions) => (
	<Layer layerType="featureLayer" {...props} />
);

export default FeatureLayer;
