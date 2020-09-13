<p align="center">
   <img src="/assets/react-logo.png" width="80px">&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="/assets/esri-logo.png" width="80px">&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="/assets/leaflet-logo.png" width="80px">
   <h1 align="center">react-esri-leaflet</h1>
</p>

<p align="center">
   <i>quickly and easily bring esri-leaflet components into your react-leaflet application</i>
</p>

## [:eyes: Demo :eyes: ](https://codesandbox.io/s/react-esri-leaflet-example-n15yn) ##

## Requirements

Requires react-leaflet version ^3.0.0, which is still in beta at this time.  

(Support for react-leaflet version 2 not currently available, though you may find what you need in my [react-leaflet-custom-components](https://github.com/slutske22/react-leaflet-custom-components#esrileafletlayer) repo.)

## Installation

To use these components you must install certain dependencies yourself:

````javascript
npm i react react-dom leaflet react-leaflet esri-leaflet
````

with all of your underlying packages installed,

````javascript
npm i react-esri-leaflet
````

## Using esri-leaflet Plugins

If you want to use any of the esri-leaflet plugins, you must first install their underlying packages.  For example, to use the `<EsriLeafletGeoSearch />` component, you must first install the underlying `esri-leaflet-geocoder`:

````javscript
npm i esri-leaflet-geocoder
````

You will also need to include the css in your html header, as explained [in the esri-leaflet-geocoder documentation](https://github.com/Esri/esri-leaflet-geocoder).  You can read more about each plugin in the Plugins section.

## Components

react-esri-leaflet offers the following components:

- &lt;BasemapLayer /&gt;
- &lt;FeatureLayer /&gt;
- &lt;TiledMapLayer /&gt;
- &lt;ImageMapLayer /&gt;
- &lt;DynamicMapLayer /&gt;
- &lt;EsriLeafletGeoSearch /&gt;

## Use

Import any of the components and use them in a `<MapContainer />`:

````javascript
import React from 'react'
import { MapContainer } from 'react-leaflet'
import { BasemapLayer, FeatureLayer, EsriLeafletGeoSearch } from 'react-esri-leaflet'

const Map = () => {

   return (
      <MapContainer
         zoom={zoom}
         center={center}>

         <BasemapLayer 
            name="DarkGray" />

         <FeatureLayer 
            url={featureLayerURL} />

         <EsriLeafletGeoSearch
            useMapBounds={false}
            position="topright" />

      </MapContainer>
   )

}

````

## Props

All react-esri-leaflet components inherit their props from the underlying esri-leaflet component options.  You can find the options for each esri-leaflet layer [in their documentation](https://esri.github.io/esri-leaflet/api-reference/#layers).  However, certain options are available or necessary for react-esri-leaflet components:

### BasemapLayer

| prop | type   | description                                                     |  required | 
|------|--------|-----------------------------------------------------------------|-----------|
| name | string | One of the [esri accepted baselayer names](https://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html) | yes | 

### EsriLeafletGeoSearch

| prop     | type     | description                                                     | required | 
|----------|----------|-----------------------------------------------------------------|----------|
| onResult | function(results) | fires when geosearch returns results, takes the [results event](https://esri.github.io/esri-leaflet/api-reference/controls/geosearch.html#events) as an argument | no |

## Events

Events can be accessed in the same way as described in the [react-leaflet documentation](https://react-leaflet-v3.now.sh/docs/api-components#evented-behavior), using the `eventHandlers` prop.  All events are inherited from their underlying esri-leaflet component.  For example:

````javascript
<FeatureLayer 
  url={freaturelayerURL} 
  eventHandlers={{
    loading: () => console.log('featurelayer loading'),
    load: () => console.log('featurelayer loaded')
  }} />
  
<EsriLeafletGeoSearch  
  position="topright" 
  eventHandlers={{
    results: r => console.log(r)
  }} />
````

## Methods

Many of the methods on esri-leaflet layers can be handled through react props.  For example, a `<FeatureLayer />` accepts the `where` prop, which applies a server side filter on the features in the layer.  Using vanilla esri-leaflet, the `getWhere` and `setWhere` methods are available on the layer.  With react-esri-leaflet, you can manage the setting and getting of many layer properties with react:

````javascript

const Map = () => {

   const [minPopulation, setMinpopulation] = useState(1000)

   return (
      <MapContainer
         zoom={zoom}
         center={center}>

         <FeatureLayer
            where={`Population > '${minPopulation}'`}
            url={featureLayerURL} />

         <button
            onClick={() => setMinpopulation(5000)}>
            Set min population to 5000
         </button>

      </MapContainer>
   )

}

````
