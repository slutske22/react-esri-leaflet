import * as Vector from "esri-leaflet-vector";
import { createLayerComponent } from "@react-leaflet/core";
import { updateEsriLayer } from "../build/EsriLeafletLayer";

type BasemapStyles =
  | "ArcGIS:DarkGray"
  | "ArcGIS:Navigation"
  | "ArcGIS:DarkGray:Base"
  | "ArcGIS:NavigationNight"
  | "ArcGIS:DarkGray:Labels"
  | "ArcGIS:Streets"
  | "ArcGIS:LightGray"
  | "ArcGIS:StreetsNight"
  | "ArcGIS:LightGray:Base	ArcGIS:StreetsRelief"
  | "ArcGIS:LightGray:Labels"
  | "ArcGIS:StreetsRelief:Base"
  | "ArcGIS:Imagery"
  | "ArcGIS:Topographic"
  | "ArcGIS:Imagery:Standard"
  | "ArcGIS:Topographic:Base"
  | "ArcGIS:Imagery:Labels"
  | "ArcGIS:Terrain"
  | "ArcGIS:Oceans	"
  | "ArcGIS:Terrain:Base"
  | "ArcGIS:Oceans:Base"
  | "ArcGIS:Terrain:Detail"
  | "ArcGIS:Oceans:Labels"
  | "ArcGIS:Hillshade:Dark"
  | "ArcGIS:Hillshade:Light"
  | "OSM:DarkGray"
  | "OSM:Standard"
  | "OSM:DarkGray:Base"
  | "OSM:StandardRelief"
  | "OSM:DarkGray:Labels"
  | "OSM:StandardRelief:Base"
  | "OSM:LightGray	"
  | "OSM:Streets"
  | "OSM:LightGray:Base"
  | "OSM:StreetsRelief"
  | "OSM:LightGray:Labels"
  | "OSM:StreetsRelief:Base"
  | "ArcGIS:ColoredPencil"
  | "ArcGIS:Community"
  | "ArcGIS:Nova"
  | "ArcGIS:ChartedTerritory"
  | "ArcGIS:Midcentury	"
  | "ArcGIS:ChartedTerritory:Base"
  | "ArcGIS:Newspaper"
  | "ArcGIS:ModernAntique	"
  | "ArcGIS:ModernAntique:Base"
  | string;

interface VectorBasemapLayerProps extends L.Layer {
  name: BasemapStyles;
  apiKey?: string;
  token?: string;
}

const createEsriLayer = (props: VectorBasemapLayerProps, context) => {
  const instance = Vector.vectorBasemapLayer(props.name, { ...props });
  return { instance, context };
};

/**
 * VectorBasemapLayer component, react-leaflet wrapper for [L.esri.Vector.vectorBasemapLayer](https://developers.arcgis.com/esri-leaflet/api-reference/layers/vector-basemap/).
 *
 * For more info: https://github.com/slutske22/react-esri-leaflet#vectorbasemaplayer-and-vectortilelayer
 */
const VectorBasemapLayer = createLayerComponent(
  createEsriLayer,
  updateEsriLayer
);

export default VectorBasemapLayer;
