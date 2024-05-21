// Initialize Leaflet map
var map = L.map('nymap').setView([40.63141267176866, -74.02759977518336], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var Tanoreenmarker= L.marker([40.63141267176866, -74.02759977518336]).addTo(map);

// Add a popup to the marker
prattinstmarker.bindPopup(`
    <b>Pratt Institute</b><br>Sculpture Garden and green space <br>
    <img src="https://aurashktest.github.io/aurashktest/images/pratt.jpg" style="width: 100px; height: auto;">
`).openPopup();

{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            -74.02824166226117,
            40.622933042455315
          ],
          [
            -74.02555499328983,
            40.62945819788405
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            -74.03586668467536,
            40.63334191629062
          ],
          [
            -74.02509442146625,
            40.630856362532114
          ]
        ],
        "type": "LineString"
      }
    }
  ]
}
