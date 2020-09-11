import * as EL from 'esri-leaflet';
import { createLayerComponent } from '@react-leaflet/core';

const createEsriLayer = (props, context) => {
	var instance;

	switch (props.layerType) {
		case 'basemapLayer':
			instance = new EL.basemapLayer(props.name, { ...props });
			break;

		default:
			instance = new EL[props.layerType]({ ...props });
	}

	return { instance, context };
};

const updateEsriLayer = (instance, props, prevProps) => {
	// basic layer setters for any leaflet layer:
	if (prevProps.url !== props.url) {
		if (instance.setUrl) instance.setUrl(props.url);
	}
	if (prevProps.opacity !== props.opacity) {
		if (instance.setOpacity) instance.setOpacity(props.opacity);
	}
	if (prevProps.zIndex !== props.zIndex) {
		if (instance.setZIndex) instance.setZIndex(props.zIndex);
	}

	// esri leaflet layer setters for all types:
	if (prevProps.to !== props.to || prevProps.from !== props.from) {
		if (instance.setTimeRange)
			instance.setTimeRange(
				props.to,
				props.from,
				props.setTimeCallback || null
			);
	}

	// feature layer setters:
	if (prevProps.style !== props.style) {
		if (instance.setStyle) instance.setStyle(props.style);
	}
	if (prevProps.where !== props.where) {
		if (instance.setWhere) instance.setWhere(props.where);
	}

	// dynamic map layer setters:
	if (prevProps.layers !== props.layers) {
		if (instance.setLayers) instance.setLayers(props.layers);
	}
	if (prevProps.layerDefs !== props.layerDefs) {
		if (instance.setLayerDefs) instance.setLayerDefs(props.layerDefs);
	}
	if (prevProps.dynamicLayers !== props.dynamicLayers) {
		if (instance.setDynamicLayers)
			instance.setDynamicLayers(props.dynamicLayers);
	}
	if (prevProps.timeOptions !== props.timeOptions) {
		if (instance.setTimeOptions) instance.setTimeOptions(props.timeOptions);
	}

	// image map layer setters:
	if (prevProps.bandIds !== props.bandIds) {
		if (instance.setBandIds) instance.setBandIds(props.bandIds);
	}
	if (prevProps.noData !== props.noData) {
		if (instance.setNoData) instance.setNoData(props.bandIds);
	}
	if (prevProps.pixelType !== props.pixelType) {
		if (instance.setPixelType) instance.setPixelType(props.bandIds);
	}
	if (prevProps.renderingRule !== props.renderingRule) {
		if (instance.setRenderingRule)
			instance.setRenderingRule(props.renderingRule);
	}
	if (prevProps.mosaicRule !== props.mosaicRule) {
		if (instance.setMosaicRule) instance.setMosaicRule(props.mosaicRule);
	}
};

const EsriLeafletLayer = createLayerComponent(createEsriLayer, updateEsriLayer);

export default EsriLeafletLayer;
