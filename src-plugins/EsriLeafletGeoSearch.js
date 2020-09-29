import { createControlComponent } from '@react-leaflet/core';
import * as ELG from 'esri-leaflet-geocoder';

const createGeoSearch = (props) => {
   const searchOptions = {
      ...props,
      providers: props.providers
         ? props.providers.map((provider) => ELG[provider]())
         : null,
   };

   const geoSearch = new ELG.Geosearch(searchOptions);

   if (props.eventHandlers) {
      const events = Object.keys(props.eventHandlers);
      events.forEach((event) => {
         geoSearch.on(event, props.eventHandlers[event]);
      });
   }

   return geoSearch;
};

const EsriLeafletGeoSearch = createControlComponent(createGeoSearch);

export default EsriLeafletGeoSearch;
