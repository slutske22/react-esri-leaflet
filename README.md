# react-esri-leaflet

<p align="center">
   <img src="/assets/react-logo.png" width="80px">&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="/assets/esri-logo.png" width="80px">&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="/assets/leaflet-logo.png" width="80px">
</p>

## react-leaflet components for esri-leaflet
*Easily use esri-leaflet components in your react-leaflet application*
<hr>

react-esri-leaflet is a small collection of components that allows you to quickly and easily bring esri-leaflet components into your react-leaflet application.

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

If you want to use any of the esri-leaflet plugins, you must first install their underlying packages.  For example, to use the `<EsriLeafletGeoSearch />` component, you must first install the underlying `esri-leaflet-geocoder:

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


