// Initialize Leaflet map
var map = L.map('nymap').setView([40.63141267176866, -74.02759977518336], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var Tanoreenmarker= L.marker([40.63141267176866, -74.02759977518336]).addTo(map);








// Load the  GeoJOSN line file 
fetch('https://dunyadj.github.io/Dj3/daytimeroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        //Customize the style of the line
        var lineStyle = {
            color: 'green', // Change color as needed
            weight: 6, // Change weight as needed
            opacity: 0.8 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });








