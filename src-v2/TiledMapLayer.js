import React from 'react';
import Layer from './EsriLeafletLayer';

const ImageMapLayer = (props) => <Layer layerType="tiledMapLayer" {...props} />;

export default ImageMapLayer;
