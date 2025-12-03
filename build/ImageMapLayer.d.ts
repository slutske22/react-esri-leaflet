import * as React from "react";
import * as EsriLeaflet from "esri-leaflet";
import { RasterLayerOptions } from "esri-leaflet";
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
/**
 * ImageMapLayer component, react-leaflet wrapper for [L.esri.ImageMapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/image-map-layer/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#components
 */
declare const ImageMapLayer: React.ForwardRefExoticComponent<Props & React.RefAttributes<EsriLeaflet.RasterLayer>>;
export default ImageMapLayer;
