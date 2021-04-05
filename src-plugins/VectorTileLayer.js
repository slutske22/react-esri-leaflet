import * as Vector from 'esri-leaflet-vector';
import { createLayerComponent } from '@react-leaflet/core';
import { updateEsriLayer } from '../build/EsriLeafletLayer';

const createEsriLayer = (props, context) => {
	const instance = Vector.vectorTileLayer(props.url, { ...props });
	return { instance, context };
};

const VectorBasemapLayer = createLayerComponent(
	createEsriLayer,
	updateEsriLayer
);

export default VectorBasemapLayer;
