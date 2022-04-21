import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import Highlight from "react-highlight";
import "../node_modules/highlight.js/styles/atelier-cave-dark.css";

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
    js: ``,
    ts: ``,
  },
  vectorbasemaplayer: {
    title: `<VectorBasemapLayer />`,
    js: ``,
    ts: ``,
  },
  featurelayer: {
    title: `<FeatureLayer />`,
    js: ``,
    ts: ``,
  },
  heatmaplayer: {
    title: `<HeatmapLayer />`,
    js: ``,
    ts: ``,
  },
  clusterlayer: {
    title: `<ClusterLayer />`,
    js: ``,
    ts: ``,
  },
};

export const CodeSamples: React.FC<Props> = ({ container, apikey }: Props) => {
  const [sample, setSample] = useState("");
  const [lang, setLang] = useState("js");

  const handleClick = (e) => setSample(e.target.id);

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

      {sample && (
        <div className="modal">
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
            <Highlight className="typescript">
              {samples[sample][lang]}
            </Highlight>
          </div>
        </div>
      )}
    </div>
  );

  return ReactDOM.createPortal(controls, container);
};
