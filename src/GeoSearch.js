import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import * as ELG from 'esri-leaflet-geocoder';

const EsriLeafletGeoSearch = (props) => {
	const map = useMap();

	useEffect(() => {
		const searchOptions = {
			...props,
			providers: props.providers
				? props.providers.map((provider) => ELG[provider]())
				: null,
		};

		const GeoSearch = new ELG.Geosearch(searchOptions);
		GeoSearch.addTo(map);

		return () => {
			GeoSearch.remove();
		};
	}, [map, props]);

	return null;
};

export default EsriLeafletGeoSearch;
