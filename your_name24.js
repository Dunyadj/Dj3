// Initialize Leaflet map
var map = L.map('nymap').setView([40.63141267176866, -74.02759977518336], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var Tanoreenmarker = L.marker([40.63141267176866, -74.02759977518336]).addTo(map);

// Add a popup to the marker
marker.bindpopup.("Tanoreen</b><br>This is a leaflet map.").openpopup();
    <b>Tanoreen</b><br>Best Arabic Food in Bay Ridge<br>
    <img src="/dunyadj.github.io/Dj3/tanoreen-brand.png" style="width: 100px; height: auto;">
`).openPopup();
