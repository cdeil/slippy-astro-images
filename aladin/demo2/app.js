var map;
var catalog;

var show_map = function() {
    console.log("This is show_map")
    map = A.aladin('#aladin-lite-div', {
        target: 'Crab',
        survey: "P/Fermi/color",
        fov: 60,
        cooFrame: 'galactic'
    });
    console.log(map);
}

var add_catalog = function( data ) {
    catalog = data.data;
    console.log("This is add_catalog");
    console.log(data);
    console.log(catalog);
    var cat = A.catalog();
    map.addCatalog(cat)
    
    for(var i=0; i < catalog.length; i++) {
        console.log(i, catalog[i]);
        var source = catalog[i];
        var marker = A.marker(source.ra, source.dec);
        cat.addSources([marker]);
        console.log(marker);
    }
}


var main = function() {
    console.log("This is main");
    show_map();
    
    console.log('Fetching catalog data ...')
    window.setTimeout(function(){
        $.getJSON( "catalog.json", add_catalog);        
    }, [5000])
    console.log('After the getJSON call ...')
    
    // add_catalog();
}

$(document).ready(main);
