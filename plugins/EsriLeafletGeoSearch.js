import { createControlComponent } from "@react-leaflet/core";
import "esri-leaflet";
import * as ELG from "esri-leaflet-geocoder";
const createGeoSearch = (props) => {
    const { providers: providersProp } = props;
    const providers = Object.keys(providersProp).map((provider) => {
        if (Object.keys(providersProp[provider]).length > 0) {
            return ELG[provider](providersProp[provider]);
        }
        else {
            return ELG[provider]();
        }
    });
    const searchOptions = {
        ...props,
        providers,
    };
    // @ts-ignore
    const geoSearch = new ELG.Geosearch(searchOptions);
    if (props.eventHandlers) {
        const events = Object.keys(props.eventHandlers);
        events.forEach((event) => {
            geoSearch.on(event, props.eventHandlers[event]);
        });
    }
    return geoSearch;
};
/**
 * EsriLeaflet GeoSearch control component, react-leaflet wrapper for [L.esri.Geocoding.Geosearch](https://developers.arcgis.com/esri-leaflet/api-reference/controls/geosearch/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#esrileafletgeosearch
 */
const EsriLeafletGeoSearch = createControlComponent(createGeoSearch);
export default EsriLeafletGeoSearch;
