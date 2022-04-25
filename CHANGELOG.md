## Version 2.0.0

- Updates to react@18, leaflet@1.8 and react-leaflet@4
  - Compatibility with react@17 and react-leaflet@3 still likely considering the high-level nature of this wrapper, may need to install with `--legacy-peer-deps`
- Dropping support for react-leaflet@2
- Fixes bad typescript typings for layer components [(#15)](https://github.com/slutske22/react-esri-leaflet/issues/15)
- Add deprecation warning for `BasemapLayer`, [(#14)](https://github.com/slutske22/react-esri-leaflet/issues/14)
- Completely overhauled example, now available through github pages, with code samples
- Dropping pure javascript example in favor of TS example, with JS sample code built in to the example