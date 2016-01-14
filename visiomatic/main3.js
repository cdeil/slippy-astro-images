var header, map;

var header_url = "https://raw.githubusercontent.com/cdeil/fermi-ts-maps/master/header.txt";
var image_url = 'https://raw.githubusercontent.com/cdeil/fermi-ts-maps/master/emin_0030_emax_0100.png';

var setup_map = function() {

    console.log("setup_map ...");

    // create the slippy map
    map = L.map("map", {
        minZoom: 1,
        maxZoom: 4,
        center: [0, 0],
        zoom: 1,
        // crs: L.CRS.Simple
        crs: L.CRS.wcs(header)
    });

    // dimensions of the image
    var w = 10001;
    var h = 401;

    // calculate the edges of the image, in coordinate space
    var southWest = map.unproject([0, h], map.getMaxZoom() - 1);
    var northEast = map.unproject([w, 0], map.getMaxZoom() - 1);
    var bounds = new L.LatLngBounds(southWest, northEast);

    console.log("southWest: ", southWest);
    console.log("northEast: ", northEast);
    console.log("bounds: ", bounds);

    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(image_url, bounds).addTo(map);

    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);
};

function add_overlays() {
    console.log("add_overlays");
    var lat = 200;
    var lon = 50;
    L.marker([lat, lon]).addTo(map);
    L.marker(map.unproject([lat, lon])).addTo(map);

    // var circle = L.circle(map.unproject([300, 10]), 1000, {
    //     color: 'green',
    //     fillColor: 'green',
    //     fillOpacity: 0.3
    // }).addTo(map);
    // });     
}

var main = function() {
    console.log("main start ...");
    jQuery.get(header_url, function(data) {
        console.log("Fetching header ...");
        header = data;
    }).done(function() {
        console.log("header");
        console.log(header);
        setup_map();
        console.log(map);
        add_overlays();    
        console.log("main done ...");
    });
};

$(document).ready(main);
