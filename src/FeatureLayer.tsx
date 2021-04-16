import * as React from 'react';
import Layer from './EsriLeafletLayer';

const FeatureLayer = (props) => <Layer layerType="featureLayer" {...props} />;

export default FeatureLayer;
