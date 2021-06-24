import * as React from 'react';
import Layer from './EsriLeafletLayer';
import * as EsriLeaflet from 'esri-leaflet';
import { RasterLayerOptions } from 'esri-leaflet';

interface Props extends RasterLayerOptions {
	url: string;
	format?: string;
	bandIds?: string;
	noData?: number;
	noDataInterpretation?: string;
	pixelType?: string;
	renderingRule?: object;
	mosaicRule?: object;
	token?: string;
	proxy?: string;
	useCors?: boolean;
	to?: Date;
	from?: Date;
}

const ImageMapLayer = React.forwardRef<
	React.RefObject<EsriLeaflet.RasterLayer>,
	Props
>((props: Props, ref) => (
	<Layer ref={ref} layerType="imageMapLayer" {...props} />
));

export default ImageMapLayer;
