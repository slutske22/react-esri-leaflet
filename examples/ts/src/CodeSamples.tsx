import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import Highlight from "react-highlight";
import "../node_modules/highlight.js/styles/agate.css";

interface Props {
  container: HTMLElement;
  apikey?: string;
}

const samples = {
  tiledmaplayer: {
    title: `<TiledMapLayer />`,
    js: `
  import React, { useRef } from 'react';
  import { MapContainer } from 'react-leaflet';
  import { TiledMapLayer } from 'react-esri-leaflet';

  const MyMap = () => {

    const layerRef = useRef();
    layerRef.current.on('tileload', (e) => {
      console.log('The underlying leaflet tileload event is:', e);
    });

    return (
      <MapContainer>
        <TiledMapLayer 
          ref={layerRef}
          url="https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_WUI_2010_01/MapServer" 
        />
      </MapContainer>
    );
  };
    `,
    ts: `
  import * as React from 'react';
  import * as EL from 'esri-leaflet';
  import { MapContainer } from 'react-leaflet';
  import { TiledMapLayer } from 'react-esri-leaflet';

  const MyMap: React.FC = () => {

    const layerRef = useRef<EL.TiledMapLayer>();
    layerRef.current.on('tileload', (e: L.LeafletEvent) => {
      console.log('The underlying leaflet tileload event is:', e);
    });

    return (
      <MapContainer>
        <TiledMapLayer 
          ref={layerRef}
          url="https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_WUI_2010_01/MapServer" 
        />
      </MapContainer>
    );
  };
    `,
  },
  basemaplayer: {
    title: `<BasemapLayer />`,
    js: `
  import React, { useRef } from 'react';
  import { MapContainer } from 'react-leaflet';
  import { BasemapLayer } from 'react-esri-leaflet';

  const MyMap = () => {

    const layerRef = useRef();
    layerRef.current.on('tileload', (e) => {
      console.log('The underlying leaflet tileload event is:', e);
    });

    return (
      <MapContainer>
        <BasemapLayer ref={layerRef} name="DarkGray" />
      </MapContainer>
    );
  };
    `,
    ts: `
  import * as React from 'react';
  import * as EL from 'esri-leaflet';
  import { MapContainer } from 'react-leaflet';
  import { BasemapLayer } from 'react-esri-leaflet';

  const MyMap: React.FC = () => {

    const layerRef = useRef<EL.BasemapLayer>();
    layerRef.current.on('tileload', (e: L.LeafletEvent) => {
      console.log('The underlying leaflet tileload event is:', e);
    });

    return (
      <MapContainer>
        <BasemapLayer ref={layerRef} name="DarkGray" />
      </MapContainer>
    );
  };
    `,
  },
  dynamicmaplayer: {
    title: `<DynamicMapLayer />`,
    js: `
  import React from 'react';
  import { MapContainer } from 'react-leaflet';
  import { DynamicMapLayer } from 'react-esri-leaflet';

  const MyMap = () => {

    const mapRef = useRef();
    const layerRef = useRef();

    layerRef.current.on('load', () => {
      layerRef.current.identify()
        .at(mapRef.current.getCenter())
        .run(function(error, featureCollection){
          console.log("The available features at the map center are:", featureCollection);
        });
    })

    return (
      <MapContainer ref={mapRef}>
        <DynamicMapLayer 
          ref={layerRef} 
          url={DYNAMIC_MAP_LAYER_URL} 
          f="image"
          layers={[3]}
        />
      </MapContainer>
    );
  };
    `,
    ts: `
  import * as React from 'react';
  import * as EL from 'esri-leaflet';
  import { MapContainer } from 'react-leaflet';
  import { DynamicMapLayer } from 'react-esri-leaflet';

  const MyMap: React.FC = () => {

    const mapRef = useRef<L.Map>();
    const layerRef = useRef<EL.DynamicMapLayer>();

    layerRef.current.on('load', () => {
      layerRef.current.identify()
        .at(mapRef.current.getCenter())
        .run(function(error, featureCollection){
          console.log("The available features at the map center are:", featureCollection);
        });
    })

    return (
      <MapContainer ref={mapRef}>
        <DynamicMapLayer 
          ref={layerRef} 
          url={DYNAMIC_MAP_LAYER_URL} 
          f="image"
          layers={[3]}
        />
      </MapContainer>
    );
  };
    `,
  },
  imagemaplayer: {
    title: `<ImageMapLayer />`,
    js: `
  import React from 'react';
  import { MapContainer } from 'react-leaflet';
  import { ImageMapLayer } from 'react-esri-leaflet';

  const MyMap = () => {

    const layerRef = useRef();

    layerRef.current.on('load', () => {
      console.log("Image service has loaded");
    });

    return (
      <MapContainer>
        <ImageMapLayer
          url="https://elevation.arcgis.com/arcgis/rest/services/WorldElevation/Terrain/ImageServer"
          renderingRule={{ rasterFunction: "Aspect_Map" }}
          token={ARCGIS_TOKEN}
        />
      </MapContainer>
    );
  };
    `,
    ts: `
  import * as React from 'react';
  import * as EL from 'esri-leaflet';
  import { MapContainer } from 'react-leaflet';
  import { ImageMapLayer } from 'react-esri-leaflet';

  const MyMap: React.FC = () => {

    const layerRef = useRef<EL.ImageMapLayer>();

    layerRef.current.on('load', () => {
      console.log("Image service has loaded");
    });

    return (
      <MapContainer>
        <ImageMapLayer
          url="https://elevation.arcgis.com/arcgis/rest/services/WorldElevation/Terrain/ImageServer"
          renderingRule={{ rasterFunction: "Aspect_Map" }}
          token={ARCGIS_TOKEN}
        />
      </MapContainer>
    );
  };
    `,
  },
  vectorbasemaplayer: {
    title: `<VectorBasemapLayer />`,
    js: `
  import React from 'react';
  import { MapContainer } from 'react-leaflet';
  import VectorBasemapLayer from 'react-esri-leaflet/plugins/VectorBasemapLayer';

  const MyMap = () => {

    const layerRef = useRef();

    layerRef.current.on('remove', () => {
      console.log("Layer has been removed");
    });

    return (
      <MapContainer>
        <VectorBasemapLayer
          ref={layerRef}
          name="ArcGIS:Streets"
          token={ARCGIS_TOKEN}
        />
      </MapContainer>
    );
  };
    `,
    ts: `
  import * as React from 'react';
  import * as Vector from "esri-leaflet-vector";
  import { MapContainer } from 'react-leaflet';
  import VectorBasemapLayer from 'react-esri-leaflet/plugins/VectorBasemapLayer';

  const MyMap: React.FC = () => {

    const layerRef = useRef<Vector.vectorBasemapLayer>();

    layerRef.current.on('remove', () => {
      console.log("Layer has been removed");
    });

    return (
      <MapContainer>
        <VectorBasemapLayer
          ref={layerRef}
          name="ArcGIS:Streets"
          token={ARCGIS_TOKEN}
        />
      </MapContainer>
    );
  };
    `,
  },
  featurelayer: {
    title: `<FeatureLayer />`,
    js: `
  import React from 'react';
  import { MapContainer } from 'react-leaflet';
  import { FeatureLayer } from 'react-esri-leaflet';

  const MyMap = ({ city }) => {

    const layerRef = useRef();

    return (
      <MapContainer>
        <FeatureLayer
          ref={layerRef}
          where={\`CITY = $\{city\}\`}
          url="https://services8.arcgis.com/.../2020_Protests_with_Location/FeatureServer/0"
          eventHandlers={{
            loading: () => {
              console.log("featurelayer loading")
            },
            load: () => {
              console.log("featurelayer loaded");
              if (layerRef && layerRef.current) {
                layerRef.current.metadata((error, data) => {
                  console.log("featurelayer metadata:", data);
                });
              }
            },
          }}
        />
      </MapContainer>
    );
  };
    `,
    ts: `
  import * as React from 'react';
  import * as EL from "esri-leaflet";
  import { MapContainer } from 'react-leaflet';
  import { FeatureLayer } from 'react-esri-leaflet';

  const MyMap: React.FC<{ city: string; }> = ({ city }) => {

    const layerRef = useRef<EL.FeatureLayer>();

    return (
      <MapContainer>
        <FeatureLayer
          ref={layerRef}
          where={\`CITY = $\{city\}\`}
          url="https://services8.arcgis.com/.../2020_Protests_with_Location/FeatureServer/0"
          eventHandlers={{
            loading: () => {
              console.log("featurelayer loading")
            },
            load: () => {
              console.log("featurelayer loaded");
              if (layerRef && layerRef.current) {
                layerRef.current.metadata((error, data) => {
                  console.log("featurelayer metadata:", data);
                });
              }
            },
          }}
        />
      </MapContainer>
    );
  };
    `,
  },
  heatmaplayer: {
    title: `<HeatmapLayer />`,
    js: `
  import React from 'react';
  import { MapContainer } from 'react-leaflet';
  import HeatmapLayer from 'react-esri-leaflet/plugins/HeatmapLayer';

  const MyMap = ({ city }) => {

    const layerRef = useRef();
    const handleClick = () => {
      layerRef.current.query()
        .within(LATLNG_BOUNDS)
        .where("POPULATION > '10_000'")
        .run(function(error, featureCollection){
            console.log(featureCollection);
        });
    };

    return (
      <MapContainer>
        <button onClick={handleClick}>Run query</button>
        <HeatmapLayer
          ref={layerRef}
          url="https://services8.arcgis.com/.../2020_Protests_with_Location/FeatureServer/0"
          where={\`CITY = $\{city\}\`}
          radius={20}
          eventHandlers={{
            loading: () => console.log("loading heatmap"),
          }}
        />
      </MapContainer>
    );
  };
      `,
    ts: `
  import * as React from 'react';
  import * as Heatmap from "esri-leaflet-heatmap";
  import { MapContainer } from 'react-leaflet';
  import HeatmapLayer from 'react-esri-leaflet/plugins/HeatmapLayer';

  const MyMap: React.FC<{ city: string; }> = ({ city }) => {

    const layerRef = useRef<Heatmap.featureLayer>();
    const handleClick = () => {
      layerRef.current.query()
        .within(LATLNG_BOUNDS)
        .where("POPULATION > '10_000'")
        .run(function(error, featureCollection){
            console.log(featureCollection);
        });
    };

    return (
      <MapContainer>
        <button onClick={handleClick}>Run query</button>
        <HeatmapLayer
          ref={layerRef}
          url="https://services8.arcgis.com/.../2020_Protests_with_Location/FeatureServer/0"
          where={\`CITY = $\{city\}\`}
          radius={20}
          eventHandlers={{
            loading: () => console.log("loading heatmap"),
          }}
        />
      </MapContainer>
    );
  };
    `,
  },
  clusterlayer: {
    title: `<ClusterLayer />`,
    js: `
  import from 'react';
  import { MapContainer } from 'react-leaflet';
  import ClusterLayer from 'react-esri-leaflet/plugins/ClusterLayer';

  const MyMap = ({) => {

    const layerRef = useRef();
    const handleClick = () => {
      layerRef.current.eachFeature(function(layer){
        console.log(layer.feature.properties.NAME);
      });
    };

    return (
      <MapContainer>
        <button onClick={handleClick}>Print all features</button>
        <ClusterLayer
          ref={layerRef}
          url="https://services8.arcgis.com/.../2020_Protests_with_Location/FeatureServer/0"
        />
      </MapContainer>
    );
  };
    `,
    ts: `
  import * as React from 'react';
  import Cluster from "esri-leaflet-cluster";
  import { MapContainer } from 'react-leaflet';
  import ClusterLayer from 'react-esri-leaflet/plugins/ClusterLayer';

  const MyMap: React.FC = ({) => {

    const layerRef = useRef<Cluster>();
    const handleClick = () => {
      layerRef.current.eachFeature(function(layer){
        console.log(layer.feature.properties.NAME);
      });
    };

    return (
      <MapContainer>
        <button onClick={handleClick}>Print all features</button>
        <ClusterLayer
          ref={layerRef}
          url="https://services8.arcgis.com/.../2020_Protests_with_Location/FeatureServer/0"
        />
      </MapContainer>
    );
  };
    `,
  },
  vectortilelayer: {
    title: `<VectorTileLayer />`,
    js: `
  import React from 'react';
  import { MapContainer } from 'react-leaflet';
  import VectorTileLayer from 'react-esri-leaflet/plugins/VectorTileLayer';

  const MyMap = () => {

    const layerRef = useRef();

    layerRef.current.on('remove', () => {
      console.log("Layer has been removed");
    });

    return (
      <MapContainer>
        <VectorTileLayer
          ref={layerRef}
          url="https://vectortileservices3.arcgis.com/.../VectorTileServer"
          token={ARCGIS_TOKEN}
        />
      </MapContainer>
    );
  };
    `,
    ts: `
  import * as React from 'react';
  import * as Vector from "esri-leaflet-vector";
  import { MapContainer } from 'react-leaflet';
  import VectorTileLayer from 'react-esri-leaflet/plugins/VectorTileLayer';

  const MyMap: React.FC = () => {

    const layerRef = useRef<Vector.vectorTileLayer>();

    layerRef.current.on('remove', () => {
      console.log("Layer has been removed");
    });

    return (
      <MapContainer>
        <VectorTileLayer
          ref={layerRef}
          url="https://vectortileservices3.arcgis.com/.../VectorTileServer"
          token={ARCGIS_TOKEN}
        />
      </MapContainer>
    );
  };
    `,
  },
  geosearch: {
    title: `<EsriLeafletGeoSearch />`,
    js: ``,
    ts: ``,
  },
};

/**
 * Logic and markup to inject and render code samples
 */
export const CodeSamples: React.FC<Props> = ({ container, apikey }: Props) => {
  const [sample, setSample] = useState("");
  const [lang, setLang] = useState<"js" | "ts">("js");

  const handleClick = (e) => setSample(e.target.id);

  useEffect(() => {
    if (!sample) {
      setLang("js");
    }
  }, [sample]);

  const controls = (
    <div id="code-sample-controls">
      <div className="see-code-button" id="tiledmaplayer" onClick={handleClick}>
        {`</>`} See Code
      </div>
      <div className="see-code-button" id="basemaplayer" onClick={handleClick}>
        {`</>`} See Code
      </div>
      <div
        className="see-code-button"
        id="dynamicmaplayer"
        onClick={handleClick}
      >
        {`</>`} See Code
      </div>
      <div className="see-code-button" id="imagemaplayer" onClick={handleClick}>
        {`</>`} See Code
      </div>
      {apikey && (
        <div
          className="see-code-button"
          id="vectorbasemaplayer"
          onClick={handleClick}
        >
          {`</>`} See Code
        </div>
      )}

      <div className="leaflet-control-layers-separator" onClick={handleClick} />

      <div className="see-code-button" id="featurelayer" onClick={handleClick}>
        {`</>`} See Code
      </div>
      <div className="see-code-button" id="heatmaplayer" onClick={handleClick}>
        {`</>`} See Code
      </div>
      <div className="see-code-button" id="clusterlayer" onClick={handleClick}>
        {`</>`} See Code
      </div>
      <div
        className="see-code-button"
        id="vectortilelayer"
        onClick={handleClick}
      >
        {`</>`} See Code
      </div>

      <div className="see-code-button" id="geosearch" onClick={handleClick}>
        {`</>`} See Code
      </div>

      {sample && (
        <div className="modal" style={{ zIndex: 1000000 }}>
          <div className="code-sample-inner">
            <h4>
              {samples[sample].title}{" "}
              <div>
                <span
                  className={`language-button js ${lang === "js" && "active"}`}
                  onClick={() => setLang("js")}
                >
                  JS
                </span>
                <span
                  className={`language-button ts ${lang === "ts" && "active"}`}
                  onClick={() => setLang("ts")}
                >
                  TS
                </span>
                <span
                  className={`language-button`}
                  onClick={() => setSample("")}
                >
                  Close
                </span>
              </div>
            </h4>
            <Highlight className="tsx">{samples[sample][lang]}</Highlight>
          </div>
        </div>
      )}
    </div>
  );

  return ReactDOM.createPortal(controls, container);
};
