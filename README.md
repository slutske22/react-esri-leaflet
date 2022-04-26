<p align="center">
   <img src="https://raw.githubusercontent.com/slutske22/react-esri-leaflet/HEAD/assets/react-logo.png" width="80px">&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="https://raw.githubusercontent.com/slutske22/react-esri-leaflet/HEAD/assets/esri-logo.png" width="80px">&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="https://raw.githubusercontent.com/slutske22/react-esri-leaflet/HEAD/assets/leaflet-logo.png" width="80px">
   <h1 align="center">react-esri-leaflet</h1>
</p>

<p align="center">
</p>

<p align="center">
   <i>quickly and easily bring esri-leaflet components into your react-leaflet application</i>
   <h2 align="center"><a href="https://slutske22.github.io/react-esri-leaflet/">&#128064; Demo &#128064;</a></h2>
</p>

[![CircleCI](https://circleci.com/gh/slutske22/react-esri-leaflet.svg?style=shield)](https://app.circleci.com/pipelines/github/slutske22/react-esri-leaflet)
[![npm version](https://badge.fury.io/js/react-esri-leaflet.svg)](https://badge.fury.io/js/react-esri-leaflet)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/db56e8d8a5df46e4b4d7fccea442c387)](https://www.codacy.com/gh/slutske22/react-esri-leaflet/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=slutske22/react-esri-leaflet&amp;utm_campaign=Badge_Grade)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


## Requirements

Requires react^18, react-leaflet^4, and esri-leaflet^3. 

## Installation

To use these components you must install certain dependencies yourself:

```javascript
npm i react react-dom leaflet react-leaflet esri-leaflet
```

with all of your underlying packages installed,

```javascript
npm i react-esri-leaflet
```

## Components

react-esri-leaflet offers the following components:

Native Components:

- &lt;BasemapLayer /&gt;
- &lt;FeatureLayer /&gt;
- &lt;TiledMapLayer /&gt;
- &lt;ImageMapLayer /&gt;
- &lt;DynamicMapLayer /&gt;

Plugins:

- &lt;EsriLeafletGeoSearch /&gt;
- &lt;HeatmapLayer /&gt;
- &lt;ClusterLayer /&gt;
- &lt;VectorBasemapLayer /&gt;
- &lt;VectorTileLayer /&gt;

## Use

Import any of the components and use them in a `<MapContainer />`:

```javascript
import React from "react";
import { MapContainer } from "react-leaflet";
import { BasemapLayer, FeatureLayer } from "react-esri-leaflet";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/GeoSearch";

const Map = () => {
  return (
    <MapContainer zoom={zoom} center={center}>
      <BasemapLayer name="DarkGray" />
      <FeatureLayer url={featureLayerURL} />
      <EsriLeafletGeoSearch useMapBounds={false} position="topright" />
    </MapContainer>
  );
};
```

### Using esri-leaflet Plugins

If you want to use any of the esri-leaflet plugins, you must first install their underlying packages and any associated css. Each plugin has its own requirements, which you can find in the esri-leaflet docs.  Plugins are imported not from the main package, but from the `/plugins/<PluginName>` subfolder, like this:

```javascript
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
```

#### `EsriLeafletGeoSearch`

You must first install the underlying `esri-leaflet-geocoder`:

```javscript
npm i esri-leaflet-geocoder
```

You will also need to include the css in your html header, as explained [in the esri-leaflet-geocoder documentation](https://github.com/Esri/esri-leaflet-geocoder). You can then use the `<EsriLeafletGeoSearch />` component. See the Use section for examples.

#### `HeatmapLayer`

First install the underlying dependencies:

```javscript
npm i leaflet.heat esri-leaflet-heatmap
```

You can then use the `<HeatmapLayer />` component.

#### `ClusterLayer`

First install the underlying dependencies:

```javscript
npm i leaflet.markercluster esri-leaflet-cluster
```

You can then use the `<ClusterLayer />` component.

#### VectorBasemapLayer and VectorTileLayer

First install the underlying dependencies:

```javscript
npm i esri-leaflet-vector
```

You can then use the `<VectorBasemapLayer />` and `<VectorTileLater />` components.

## Props

All react-esri-leaflet components inherit their props from the underlying esri-leaflet component options. You can find the options for each esri-leaflet layer [in their documentation](https://esri.github.io/esri-leaflet/api-reference/#layers). However, certain options are available or necessary for react-esri-leaflet components:

<table>
  <tr>
    <td>component</td>
    <td><b>prop<b></td>
    <td><b>type<b></td>
    <td><b>description<b></td>
    <td><b>required<b></td>
  </tr>
  <tr>
    <td><b>BasemapLayer</b></td>
    <td>name</td>
    <td>string</td>
    <td>one of the <a href="https://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html">esri accepted baselayer names</a></td>
    <td style="font-weight: bold; color: red;">yes</td>
  </tr>
  <tr>
    <td><b>VectorBasemapLayer</b></td>
    <td>name</td>
    <td>string</td>
    <td>one of the <a href="https://esri.github.io/esri-leaflet/api-reference/layers/vector-basemap.html#constructor">esri accepted vector basemap names</a></td>
    <td style="font-weight: bold; color: red;">yes</td>
  </tr>
  <tr>
    <td><b>VectorTileLayer</b></td>
    <td>url</td>
    <td>string</td>
    <td>the url of the vector tile layer service</td>
    <td style="font-weight: bold; color: red;">yes</td>
  </tr>
  <tr>
    <td><b>EsriLeafletGeoSearch</b></td>
    <td>onResult</td>
    <td>function(results)</td>
    <td>fires when geosearch returns results, takes the <a href="https://esri.github.io/esri-leaflet/api-reference/controls/geosearch.html#events">results event</a> as an argument</td>
    <td>no</td>
  </tr>
  <tr>
    <td style="vertical-align: top;"><b>EsriLeafletGeoSearch</b></td>
    <td style="vertical-align: top;">providers</td>
    <td style="vertical-align: top;">object</td>
    <td>
      An object defining the providers to be used for the geosearch component.  The object keys are the names of one of the <a href="https://esri.github.io/esri-leaflet/api-reference/controls/geosearch.html#providers">possible providers</a>, and the values are objects containing the options to configure that provider.  See below for an example.
    </td>
    <td style="vertical-align: top; font-weight: bold; color: red;">yes</td>
  </tr>
  <tr>
    <td></td>
    <td colspan="4">

```javascript
<EsriLeafletGeoSearch 
  providers={{
    arcgisOnlineProvider: {
      token: your_token,
      label: "ArcGIS Online Results",
      maxResults: 10
    },
    featureLayerProvider: {
      url: feature_layer_url,
      label: 'Featurelayer Provider Results'
      bufferRadius: 5000
    }
  }}
/>;
```

  </tr>
<table>

## Events

Events can be accessed in the same way as described in the [react-leaflet documentation](https://react-leaflet-v3.now.sh/docs/api-components#evented-behavior), using the `eventHandlers` prop. All events are inherited from their underlying esri-leaflet component. For example:

```javascript
<FeatureLayer
  url={'featureLayerURL'}
  eventHandlers={{
    loading: () => console.log('featurelayer loading'),
    load: () => console.log('featurelayer loaded')
  }} />

<EsriLeafletGeoSearch
  position="topright"
  eventHandlers={{
    requeststart: () => console.log('Started request...'),
    requestend: () => console.log('Ended request...'),
    results: (r) => console.log(r)
  }} />
```

## Methods

Many of the methods on esri-leaflet layers can be handled through react props. For example, a `<FeatureLayer />` accepts the `where` prop, which applies a server side filter on the features in the layer. Using vanilla esri-leaflet, the `getWhere` and `setWhere` methods are available on the layer. With react-esri-leaflet, you can manage the setting and getting of many layer properties with react:

```javascript
const Map = () => {

  const [minPopulation, setMinpopulation] = useState(1000);

  return (
    <MapContainer zoom={zoom} center={center}>

      <FeatureLayer
        where={`Population > '${minPopulation}'`}
        url={featureLayerURL}
      />

      <button onClick={() => setMinpopulation(5000)}>
        Set min population to 5000
      </button>

    </MapContainer>
  );

};
```

In this way, you can 'get' or 'set' your prop by accessing the state variable used to control it, or setting that state variable.

Other methods on esri-leaflet components are less related to presentational logic, and more related to analysis or interacting with the root dataset. For example, calling `query` or `eachFeature` on a featureLayer will not affect the presentation logic. In this sense, all methods not directly affecting the presentational logic of your layers (read: everything but the setters and getters) should be accessed by getting a `ref` to the underlying esri-leaflet layer. For example:

```javascript
const Map = () => {

  const featureLayerRef = useRef();

  const queryFeature = () => {
    featureLayerRef.current
      .query()
      .within(latlngbounds)
      .where("Direction = 'WEST'")
      .run(function (error, featureCollection) {
        console.log(featureCollection);
      });
  };

  return (
    <MapContainer zoom={zoom} center={center}>
      <FeatureLayer ref={featureLayerRef} url={featureLayerURL} />
      <button onClick={queryFeature}>Run a Query</button>
    </MapContainer>
  );

};
```

## Using Authenticated Layers

Any esri layers that require authentication accept a `token` prop.  A react-esri-leaflet layer that requires a `token` should be conditionally rendered based on the availability of the token.  For example, a typical token getting function is as follows:

```Javascript
async function authenticateEsri(client_id, client_secret, expiration) {

  const authservice = "https://www.arcgis.com/sharing/rest/oauth2/token";
  const url = `${authservice}?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials&expiration=${expiration}`;

  let token;

  await fetch(url, {
    method: "POST"
  })
    .then((res) => res.json())
    .then((res) => {
      token = res.access_token;
    })
    .catch((error) => {
      console.error(error);
    });

  return token;

}
```

On component mount, you can call this function, save the token to state, and conditionally render the layer based on the state variable:

```Javascript
const Map = (props) => {

  const [token, setToken] = useState(null);

  useEffect(() => {
    async function getToken() {
      const token = await authenticateEsri();
      setToken(token);
    }
    getToken();
  }, []);

  return (
    <MapContainer zoom center>
      {token && (
        <>
          <ImageMapLayer
            token={token}
            url="https://landscape6.arcgis.com/arcgis/rest/services/World_Land_Cover_30m_BaseVue_2013/ImageServer"
          />
          <VectorBasemapLayer name="ArcGIS:Streets" token={token} />
        </>
      )}
    </MapContainer>
  );
  
};
```

## Alternatives

You don't necesarily need an esri-leaflet component to bring esri layers into leaflet.  You can use an esri service url with a react-leaflet `TileLayer`.  For example:

```javascript
<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}">
```
is equivalent to

```javascript
<Basemap name="Oceans">
```


Esri also offers [react-arcgis](https://github.com/Esri/react-arcgis), which is a react wrapper for the ArcGIS Javascript API, but that takes you outside the realm of leaflet.

## License

MIT License
