import React from 'react';
import Layer from './EsriLeafletLayer';

const DynamicMapLayer = (props) => (
	<Layer layerType="dynamicMapLayer" {...props} />
);

export default DynamicMapLayer;
