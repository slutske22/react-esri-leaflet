import * as React from 'react';
import Layer from './EsriLeafletLayer';
import * as EsriLeaflet from 'esri-leaflet';
import { FeatureLayerOptions } from 'esri-leaflet';
import { EsriServiceEvent } from './types';

type FeatureLayerEvents =
	| EsriServiceEvent
	| 'loading'
	| 'load'
	| 'createfeature'
	| 'removefeature'
	| 'addfeature'
	| 'click'
	| 'dblclick'
	| 'mouseover'
	| 'mouseout'
	| 'mousemove'
	| 'contextmenu'
	| 'popupopen'
	| 'popupclose';

interface FeatureLayerProps extends FeatureLayerOptions {
	eventHandlers?: {
		[key in FeatureLayerEvents]?: Function;
	};
}

const FeatureLayer = React.forwardRef<
	React.RefObject<EsriLeaflet.FeatureLayer>,
	FeatureLayerProps
>((props: FeatureLayerProps, ref) => (
	<Layer ref={ref} layerType="featureLayer" {...props} />
));

export default FeatureLayer;
