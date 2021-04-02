import * as Vector from 'esri-leaflet-vector';
import { createLayerComponent } from '@react-leaflet/core';
import { updateEsriLayer } from '../src/EsriLeafletLayer';

const createEsriLayer = (props, context) => {
	const instance = Vector.vectorBasemapLayer(props.name, { ...props });
	return { instance, context };
};

const VectorBasemapLayer = createLayerComponent(
	createEsriLayer,
	updateEsriLayer
);

export default VectorBasemapLayer;
