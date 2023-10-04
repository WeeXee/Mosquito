// Initialize the map
const map = L.map('map').setView([43.610376, 1.431881], 8); // Set the initial coordinates and zoom level

// Add a tile layer (you can use various map providers, e.g., OpenStreetMap)
let osm = L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo (map);

// You can also add markers, polygons, and other map elements here as needed
// For example, adding a marker
let marker = L.marker([43.610376, 1.431881]).addTo(map)

let Basemaps = {
    "OSM": osm
}

let Overlaysmaps = {
    "Marker": marker
}

L.control.layers(Basemaps, Overlaysmaps).addTo(map)

// Customize the map's appearance
map.getContainer().style.background = '#444'; // Set the map's background color