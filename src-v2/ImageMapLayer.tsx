import * as React from 'react';
import { RasterLayerOptions } from 'esri-leaflet';
import Layer from './EsriLeafletLayer';

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

const ImageMapLayer: React.FC<Props> = (props: Props) => (
	<Layer layerType="imageMapLayer" {...props} />
);

export default ImageMapLayer;
