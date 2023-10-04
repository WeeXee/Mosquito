const apiKey = "manax"; // Remplacez par votre clé API Geonames
const input = document.getElementById("villeInput");
const suggestionsDiv = document.getElementById("suggestions");
const showMapButton = document.getElementById("showMapButton");


let selectedCity = null;

// Fonction pour effectuer une recherche de villes en fonction de la saisie de l'utilisateur
async function searchCities(query) {
    try {
        const response = await fetch(`http://api.geonames.org/searchJSON?formatted=true&username=${apiKey}&featureClass=P&orderby=population&maxRows=10&name_startsWith=${query}`);
        const data = await response.json();
        const cities = data.geonames;

        // Afficher les suggestions de villes
        suggestionsDiv.innerHTML = "";
        cities.forEach(city => {
            const suggestion = document.createElement("div");
            suggestion.textContent = `${city.name}, ${city.countryName}`;
            suggestion.addEventListener("click", () => {
                input.value = suggestion.textContent;
                suggestionsDiv.innerHTML = "";
                selectedCity = city;
            });
            suggestionsDiv.appendChild(suggestion);
        });
    } catch (error) {
        console.error("Erreur lors de la recherche de villes :", error);
    }
}

// Événement de saisie dans le champ de recherche
input.addEventListener("input", function () {
    const query = input.value.trim();
    if (query.length >= 3) {
        searchCities(query);
        suggestionsDiv.style.display = "block";
    } else {
        suggestionsDiv.innerHTML = "";
        suggestionsDiv.style.display = "none";
    }

    input.addEventListener("blur", function () {
        setTimeout(() => {
            suggestionsDiv.style.display = "none";
        }, 200); // Ajouter un délai pour permettre la sélection de la suggestion
    });
});

showMapButton.addEventListener("click", function () {
    if (selectedCity) {
        showMap(selectedCity);
    } else {
        alert("Veuillez sélectionner une ville !");
    }
});
function showMap(city){
    input.style.display = "none";
    suggestionsDiv.style.display = "none";
    showMapButton.style.display = "none";
    var latitude = parseFloat(city.lat);
    var longitude = parseFloat(city.lng);
    // Initialiser la carte
    var map = L.map('map').setView([latitude, longitude], 13);

// Ajouter une couche de carte de base (par exemple, OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    /*var circle = L.circle([43.6047, 1.4442  ], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    circle.bindPopup("Toulouse, la ville rose !");

    L.marker([43.610407, 1.431232]).addTo(map)
        .bindPopup('Ynov Campus Toulouse')
        .openPopup();*/


    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
}
