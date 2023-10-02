// Import Leaflet CSS and JavaScript
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';

// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13); // Set the initial coordinates and zoom level

// Add a tile layer (you can use various map providers, e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// You can also add markers, polygons, and other map elements here as needed
// For example, adding a marker
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A marker here.');

// Customize the map's appearance
map.getContainer().style.background = '#444'; // Set the map's background color
