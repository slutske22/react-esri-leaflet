import * as L from "leaflet";
import "esri-leaflet";
import * as EL from "esri-leaflet";
import { EsriServiceEvent } from "../build/types";
type GeosearchEvents = EsriServiceEvent | "results";
interface ApiKey {
    apikey?: string;
}
interface Providers {
    arcgisOnlineProvider?: L.esri.Geocoding.ArcgisOnlineProviderOptions & ApiKey;
    featureLayerProvider?: L.esri.Geocoding.FeatureLayerProviderOptions & ApiKey;
    mapServiceProvider?: L.esri.Geocoding.MapServiceProviderOptions & ApiKey;
    geocodeServiceProvider?: L.esri.Geocoding.GeocodeServiceProviderOptions & ApiKey;
}
interface Props extends Omit<L.esri.Geocoding.GeosearchObject, "providers"> {
    eventHandlers?: {
        [key in GeosearchEvents]?: Function;
    };
    providers?: Providers;
}
/**
 * EsriLeaflet GeoSearch control component, react-leaflet wrapper for [L.esri.Geocoding.Geosearch](https://developers.arcgis.com/esri-leaflet/api-reference/controls/geosearch/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#esrileafletgeosearch
 */
declare const EsriLeafletGeoSearch: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<EL.Geocoding.GeosearchControl>>;
export default EsriLeafletGeoSearch;
