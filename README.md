# slippy-astro-images

Demos how to display astronomy images as slippy web maps.

* Start from a single FITS image, extract header to text file and image as PNG.
* Static web pages, can be hosted anywhere (no image server needed)
* Wanted: pan, zoom, interactive marker and circle overlay, world coordinates, navigation search field
* Not the goal here: how to run image servers.

TODO: make this a feature matrix and show which demo does what with checkboxes.

I'd be interested to turn this into a set of docs and a Python package that
helps people get started and prepare input images (e.g. create tiles).

Feature and pull requests welcome!

## Demos

### Leaflet

* [Demo page](http://cdeil.github.io/slippy-astro-images/leaflet)
* Uses: [leafletjs](http://leafletjs.com/), [fitsjs](https://github.com/astrojs/fitsjs), [Porj4Leaflet](http://kartena.github.io/Proj4Leaflet/)
* [Code](https://github.com/cdeil/slippy-astro-images/tree/gh-pages/leaflet)

### Visiomatic

* [Demo page](http://cdeil.github.io/slippy-astro-images/visiomatic)
* Uses: [Visiomatic](https://github.com/astromatic/visiomatic)
* [Code](https://github.com/cdeil/slippy-astro-images/tree/gh-pages/visiomatic)

### 

### Aladin Lite

* Demo page: TODO, not implemented
* Uses [Aladin Lite](http://aladin.u-strasbg.fr/AladinLite/)
* A copy of the Aladin Lite code is available in [this GH repo](https://github.com/cdeil/AladinLite)

## Example images

* https://github.com/cdeil/fermi-ts-maps
* The [observable universe](https://en.wikipedia.org/wiki/Observable_universe) [logarithmic illustration](https://commons.wikimedia.org/wiki/File:Observable_universe_logarithmic_illustration.png)
