// create the slippy map
var map = L.map('map', {
  minZoom: 1,
  maxZoom: 4,
  center: [0, 0],
  zoom: 1,
  crs: L.CRS.Simple
});

// dimensions of the image
var w = 10001;
var h = 401;
var url = 'https://raw.githubusercontent.com/cdeil/fermi-ts-maps/master/emin_0030_emax_0100.png';

// calculate the edges of the image, in coordinate space
var southWest = map.unproject([0, h], map.getMaxZoom()-1);
var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
var bounds = new L.LatLngBounds(southWest, northEast);

// add the image overlay, 
// so that it covers the entire map
L.imageOverlay(url, bounds).addTo(map);

// tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds);

L.marker([-20, 500]).addTo(map)
    .bindPopup("Hello world!");
    // .openPopup();

var circle = L.circle(map.unproject([300, 10]), 10000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 1
}).addTo(map);
