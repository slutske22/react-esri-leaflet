import * as React from 'react';
import Layer from './EsriLeafletLayer';
import { FeatureLayerOptions } from 'esri-leaflet';

const FeatureLayer: React.FC<FeatureLayerOptions> = (
	props: FeatureLayerOptions
) => <Layer layerType="featureLayer" {...props} />;

export default FeatureLayer;
