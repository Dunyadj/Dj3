// Initialize Leaflet map
var map = L.map('nymap').setView([40.63141267176866, -74.02759977518336], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var Tanoreenmarker= L.marker([40.63141267176866, -74.02759977518336]).addTo(map);








// Load the GeoJSON line file
fetch('https://Dj3.github.io/Dj3/{"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"coordinates":[[-74.02670744521191,40.61942537627553],[-74.02632769272456,40.619868838440425],[-74.02721572931091,40.620316732239246],[-74.02651464779566,40.621154862071336],[-74.02620500345968,40.62149631935799],[-74.02800444601614,40.6225827627504],[-74.02837835615833,40.622822221366135],[-74.03648753235665,40.624764465084866],[-74.0357864508407,40.626289840645796],[-74.035535580508,40.62695659402337],[-74.03860123363549,40.62770175000233],[-74.03990572087625,40.62799389502081],[-74.04020511139014,40.627628713548006],[-74.04049380938581,40.627709865159204],[-74.04071835227147,40.627717980314856],[-74.04090012508385,40.62780724696185],[-74.04082527745554,40.62848080054445],[-74.04059004205152,40.629267956965435],[-74.04050450190415,40.630022644615536],[-74.04090012508385,40.630120023046146],[-74.0409467089515,40.63012083452597],[-74.04081182315106,40.63050622167506],[-74.04033917959617,40.63155544467597],[-74.03907591495106,40.63424743736937],[-74.03678154184374,40.638946857945456],[-74.03680991554343,40.6390729666781],[-74.03771787393623,40.63935286569773]],"type":"LineString"}}]}')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'red', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });


    // Load the GeoJSON line file
fetch('https://aurashktest.github.io/aurashktest/akeveningroute.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the line
    var lineStyle = {
        color: 'blue', // Change color as needed
        weight: 5, // Change weight as needed
        opacity: 0.7 // Change opacity as needed
    };







