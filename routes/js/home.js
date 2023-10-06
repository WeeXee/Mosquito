document.addEventListener('DOMContentLoaded', function() {
    let stungBtn = document.getElementById('stungBtn');
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');

    // Créez un élément input de type "file"
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'fileInput';
    fileInput.style.display = 'none'; // Cachez l'input

    stungBtn.addEventListener('click', function() {
        /*console.log("zob dans le cul")*/
        main.innerHTML =
            "<h1 class='TitleQuestion'>Take a <span class='TitleColor'>pic</span> of the sting </h1>" +
            "<div class='main__container'>" +
            "<div class='container__chevronL' style='margin-left: 2%'><svg class='svg' width=\"20\" height=\"40\" viewBox=\"0 0 41 79\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M39.7188 77.9375L1.28125 39.5L39.7188 1.0625\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg>\n</div>" +
            "<div class='container__centerOne'><svg class='svgImage' style='cursor:pointer;' width=\"110\" height=\"110\" viewBox=\"0 0 158 131\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<g filter=\"url(#filter0_d_62_39)\">\n" +
            "<rect x=\"2.5\" y=\"2.5\" width=\"149\" height=\"122\" rx=\"19.5\" fill=\"white\" stroke=\"#FA2302\"/>\n" +
            "<rect width=\"110\" height=\"87\" transform=\"translate(22 20)\" fill=\"white\"/>\n" +
            "<path d=\"M26.7188 83.0313L53.5885 56.1615C54.6767 55.0733 55.9686 54.21 57.3904 53.6211C58.8122 53.0322 60.3361 52.7291 61.875 52.7291C63.4139 52.7291 64.9378 53.0322 66.3596 53.6211C67.7814 54.21 69.0733 55.0733 70.1615 56.1615L97.0313 83.0313M89.2188 75.2188L96.5573 67.8802C97.6455 66.792 98.9374 65.9288 100.359 65.3399C101.781 64.7509 103.305 64.4478 104.844 64.4478C106.383 64.4478 107.907 64.7509 109.328 65.3399C110.75 65.9288 112.042 66.792 113.13 67.8802L128.281 83.0313M34.5313 102.563H120.469C122.541 102.563 124.528 101.739 125.993 100.274C127.458 98.8091 128.281 96.822 128.281 94.75V32.25C128.281 30.178 127.458 28.1909 125.993 26.7257C124.528 25.2606 122.541 24.4375 120.469 24.4375H34.5313C32.4592 24.4375 30.4721 25.2606 29.007 26.7257C27.5419 28.1909 26.7188 30.178 26.7188 32.25V94.75C26.7188 96.822 27.5419 98.8091 29.007 100.274C30.4721 101.739 32.4592 102.563 34.5313 102.563ZM89.2188 43.9688H89.2604V44.0104H89.2188V43.9688ZM91.1719 43.9688C91.1719 44.4868 90.9661 44.9835 90.5998 45.3498C90.2335 45.7161 89.7368 45.9219 89.2188 45.9219C88.7008 45.9219 88.204 45.7161 87.8377 45.3498C87.4714 44.9835 87.2656 44.4868 87.2656 43.9688C87.2656 43.4507 87.4714 42.954 87.8377 42.5877C88.204 42.2214 88.7008 42.0156 89.2188 42.0156C89.7368 42.0156 90.2335 42.2214 90.5998 42.5877C90.9661 42.954 91.1719 43.4507 91.1719 43.9688Z\" stroke=\"#FA2302\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</g>\n" +
            "<defs>\n" +
            "<filter id=\"filter0_d_62_39\" x=\"0\" y=\"0\" width=\"158\" height=\"131\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n" +
            "<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n" +
            "<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n" +
            "<feOffset dx=\"2\" dy=\"2\"/>\n" +
            "<feGaussianBlur stdDeviation=\"2\"/>\n" +
            "<feComposite in2=\"hardAlpha\" operator=\"out\"/>\n" +
            "<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.980392 0 0 0 0 0.137255 0 0 0 0 0.00784314 0 0 0 1 0\"/>\n" +
            "<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_62_39\"/>\n" +
            "<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_62_39\" result=\"shape\"/>\n" +
            "</filter>\n" +
            "</defs>\n" +
            "</svg>\n</div>" +
            "<div class='container__centerTwo'>" +
                "<div id='Date' class='Date'>" +
            "<div>"+
            "<select id='year'>" +
            "</select>"+

            "</div>"+
            "<div>"+
            "<select id='month'>" +
            "</select>"+
            "</div>"+

            "<div>"+
            "<select id='day'>" +
            "</select>"+
            "</div>"+
                "</div>"+
                "<div id='Time' class='Time'>" +
                    "<div>"+
                        "<select id='hour'>" +
            "<option value=''>Hour</option>" +
            "</select>"+
                    "</div>"+
                    "<div>"+
                        "<select id='minute'>" +
            "<option value=''>Min</option>" +
            "</select>"+
                    "</div>"+
                "</div>"+
            "</div>" +
            "<div class='container__centerThree'>" +
            "<h1>P3</h1>"+

            "</div>" +
            "<div class='container__centerFour'>" +
            "<div class='Selection'>"+
                "<input type='text' id='villeInput' placeholder='Location'>"+
            "<svg class='locationSVG' id='location' width='40' height='40' viewBox='0 0 63 63' fill='none' xmlns='http://www.w3.org/2000/svg'>"+
                "<path d='M39.375 27.5625C39.375 29.6511 38.5453 31.6541 37.0685 33.131C35.5916 34.6078 33.5886 35.4375 31.5 35.4375C29.4114 35.4375 27.4084 34.6078 25.9315 33.131C24.4547 31.6541 23.625 29.6511 23.625 27.5625C23.625 25.4739 24.4547 23.4709 25.9315 21.994C27.4084 20.5172 29.4114 19.6875 31.5 19.6875C33.5886 19.6875 35.5916 20.5172 37.0685 21.994C38.5453 23.4709 39.375 25.4739 39.375 27.5625Z' stroke='#FA2302' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>"+
                "<path d='M51.1875 27.5625C51.1875 46.3103 31.5 57.0938 31.5 57.0938C31.5 57.0938 11.8125 46.3103 11.8125 27.5625C11.8125 22.3411 13.8867 17.3335 17.5788 13.6413C21.271 9.94921 26.2786 7.875 31.5 7.875C36.7214 7.875 41.729 9.94921 45.4212 13.6413C49.1133 17.3335 51.1875 22.3411 51.1875 27.5625Z' stroke='#FA2302' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>"+
            "</svg>"+
        " <div id='suggestions'></div>"+
            "</div>"+
            "</div>" +
            "<div style='margin-right: 2%' class='container__chevronR'><svg class='svg' width=\"20\" height=\"40\" viewBox=\"0 0 41 79\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M1.28125 77.9375L39.7188 39.5L1.28125 1.0625\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg>\n</div>" +
            "</div>";
        main.style.flexDirection = "column";
        main.style.justifyContent = "flex-end";
        main.style.gap = "3rem"
        footer.innerHTML = "<h1 class='TitleQuestion'><span class='TitleColor'>1</span> / 4</h1>"
        footer.style.alignItems = "center";
        let TitleQuestion = document.querySelector('.TitleQuestion');

        function nextStep() {
            let centerOne = document.querySelector('.container__centerOne');
            let centerTwo = document.querySelector('.container__centerTwo');
            let centerThree = document.querySelector('.container__centerThree');
            let centerFour = document.querySelector('.container__centerFour');
            let centerFive = document.querySelector('.container__centerFive');

            if (centerOne.style.display != "none") {

                //add animation NexStep and PreviousStep

                TitleQuestion.innerHTML = "Enter the <span class='TitleColor'>date</span> and the <span class='TitleColor'>time</span> of your sting "
                centerOne.style.animation = "PrevStep 0.7s";
                centerOne.style.animationFillMode = "forwards";
                footer.innerHTML = "<h1 class='TitleQuestion'><span class='TitleColor'>2</span> / 4</h1>"
                setTimeout(function() {
                    initDateDropdowns();
                    centerTwo.style.display = "flex";
                    centerOne.style.display = "none";
                    centerTwo.style.marginLeft = "0";
                    centerTwo.style.animation = "PrevStep2 0.7s";
                    centerTwo.style.animationFillMode = "forwards";
                }, 350);


            } else if (centerTwo.style.display === "flex") {
                TitleQuestion.innerHTML = "What <span class='TitleColor'>symptoms</span> do you have ? "
                centerTwo.style.animation = "PrevStep 0.7s";
                centerTwo.style.animationFillMode = "forwards";
                footer.innerHTML = "<h1 class='TitleQuestion'><span class='TitleColor'>3</span> / 4</h1>"
                setTimeout(function() {
                    centerThree.style.display = "flex";
                    centerTwo.style.display = "none";
                    centerThree.style.marginLeft = "0";
                    centerThree.style.animation = "PrevStep2 0.7s";
                    centerThree.style.animationFillMode = "forwards";
                }, 350);
            } else if (centerThree.style.display === "flex") {
                TitleQuestion.innerHTML = "In which <span class='TitleColor'>city</span> did you get stung ? "
                centerThree.style.animation = "PrevStep 0.7s";
                centerThree.style.animationFillMode = "forwards";
                footer.innerHTML = "<h1 class='TitleQuestion'><span class='TitleColor'>4</span> / 4</h1>"
                setTimeout(function() {
                    centerFour.style.display = "flex";
                    centerThree.style.display = "none";
                    centerFour.style.marginLeft = "0";
                    centerFour.style.animation = "PrevStep2 0.7s";
                    centerFour.style.animationFillMode = "forwards";
                }, 350);
            } /*else if (centerFour.style.display === "flex") {
                centerOne.style.display = "none";
                centerTwo.style.display = "none";
                centerThree.style.display = "none";
                centerFour.style.display = "none";
                centerFive.style.display = "flex";
            } /*else if (centerFive.style.display === "flex") {
                centerOne.style.display = "flex";
                centerTwo.style.display = "none";
                centerThree.style.display = "none";
                centerFour.style.display = "none";
                centerFive.style.display = "none";
            }*/
        }

        function previousStep() {
            let centerOne = document.querySelector('.container__centerOne');
            let centerTwo = document.querySelector('.container__centerTwo');
            let centerThree = document.querySelector('.container__centerThree');
            let centerFour = document.querySelector('.container__centerFour');
            let centerFive = document.querySelector('.container__centerFive');
/*
            if (centerOne.style.display != "none") {

                //add animation NexStep and PreviousStep

                centerOne.style.animation = "NextStep 0.7s";
                centerOne.style.animationFillMode = "forwards";
                footer.innerHTML = "<h1 class='TitleQuestion'><span class='TitleColor'>2</span> / 4</h1>"
                setTimeout(function() {
                    centerTwo.style.display = "flex";
                    centerOne.style.display = "none";
                    centerTwo.style.marginLeft = "0";
                    centerTwo.style.animation = "NextStep2 0.7s";
                    centerTwo.style.animationFillMode = "forwards";
                }, 300);


            } else*/ if (centerTwo.style.display === "flex") {
                TitleQuestion.innerHTML = "Take a <span class='TitleColor'>pic</span> of the sting "
                centerTwo.style.animation = "NextStep 0.7s";
                centerTwo.style.animationFillMode = "forwards";
                footer.innerHTML = "<h1 class='TitleQuestion'><span class='TitleColor'>1</span> / 4</h1>"
                setTimeout(function() {
                    centerTwo.style.display = "none";
                    centerTwo.style.marginRight = "0";
                    centerTwo.style.marginLeft = "0";
                    centerOne.style.display = "flex";
                    /*centerOne.style.marginLeft = "-40%";*/
                    centerOne.style.animation = "NextStep2 0.7s";
                    centerOne.style.animationFillMode = "forwards";
                }, 350);
            } else if (centerThree.style.display === "flex") {
                TitleQuestion.innerHTML = "Enter the <span class='TitleColor'>date</span> and the <span class='TitleColor'>time</span> of your sting "
                centerThree.style.animation = "NextStep 0.7s";
                centerThree.style.animationFillMode = "forwards";
                footer.innerHTML = "<h1 class='TitleQuestion'><span class='TitleColor'>2</span> / 4</h1>"
                setTimeout(function() {
                    centerThree.style.display = "none";
                    centerTwo.style.display = "flex";
                    /*centerTwo.style.marginLeft = "-80%";*/
                    centerTwo.style.animation = "NextStep2 0.7s";
                    centerTwo.style.animationFillMode = "forwards";
                }, 350);
            } else if (centerFour.style.display === "flex") {
                TitleQuestion.innerHTML = "What <span class='TitleColor'>symptoms</span> do you have ? "
                centerFour.style.animation = "NextStep 0.7s";
                centerFour.style.animationFillMode = "forwards";
                footer.innerHTML = "<h1 class='TitleQuestion'><span class='TitleColor'>3</span> / 4</h1>"
                setTimeout(function() {
                    centerFour.style.display = "none";
                    centerThree.style.display = "flex";
                    /*centerThree.style.marginLeft = "-80%";*/
                    centerThree.style.animation = "NextStep2 0.7s";
                    centerThree.style.animationFillMode = "forwards";
                }, 350);
            } /*else if (centerFive.style.display === "flex") {
                centerOne.style.display = "flex";
                centerTwo.style.display = "none";
                centerThree.style.display = "none";
                centerFour.style.display = "none";
                centerFive.style.display = "none";
            }*/
        }

        const svgImage = document.querySelector('.svgImage');

        svgImage.addEventListener('click', function() {
            // Déclenchez le sélecteur de fichier lorsque le SVG est cliqué
            fileInput.click();
        });

        // Réagissez lorsque l'utilisateur sélectionne un fichier
        fileInput.addEventListener('change', function(event) {
            const selectedFile = event.target.files[0];

            if (selectedFile) {
                // Faites quelque chose avec le fichier sélectionné, par exemple, affichez le nom du fichier
                console.log(`Fichier sélectionné : ${selectedFile.name}`);
            }
        });

        let chevronL = document.querySelector('.container__chevronL');
        let chevronR = document.querySelector('.container__chevronR');

        chevronL.addEventListener('click', function() {
            previousStep();
        });

        chevronR.addEventListener('click', function() {
            nextStep();
        });


    });
});

// Fonction pour initialiser les menus déroulants de date
function initDateDropdowns() {
    const yearDropdown = document.getElementById("year");
    const monthDropdown = document.getElementById("month");
    const dayDropdown = document.getElementById("day");
    const hourDropdown = document.getElementById("hour");
    const minuteDropdown = document.getElementById("minute");

    // Remplir le menu déroulant pour l'année (choisir une plage d'années appropriée)
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 5; year--) {
        if(year===currentYear){
            const option = document.createElement("option");
            option.text = "Year";
            yearDropdown.add(option);
        }
        const option = document.createElement("option");
        option.text = year;
        yearDropdown.add(option);
    }

    // Remplir le menu déroulant pour le mois
    for (let month = 1; month <= 12; month++) {
        if(month===1){
            const option = document.createElement("option");
            option.text = "Month";
            monthDropdown.add(option);
        }
        const option = document.createElement("option");
        option.text = month;
        monthDropdown.add(option);
    }

    // Remplir le menu déroulant pour l'heure
    for (let hour = 1; hour <= 23; hour++) {
        const option = document.createElement("option");
        option.text = hour;
        hourDropdown.add(option);
    }

    // Remplir le menu déroulant pour les minutes
    for (let minute = 1; minute <= 59; minute++) {
        const option = document.createElement("option");
        option.text = minute;
        minuteDropdown.add(option);
    }

    // Mettre à jour les jours en fonction de l'année et du mois sélectionnés
    function updateDays() {
        if(yearDropdown.value=== "Year" || monthDropdown.value==="Month"){
            const option = document.createElement("option");
            option.text = "Day";
            dayDropdown.add(option);
            for (let day = 1; day <= 31; day++) {
                const option = document.createElement("option");
                option.text = day;
                dayDropdown.add(option);
            }
            return;
        }
        const selectedYear = parseInt(yearDropdown.value);
        const selectedMonth = parseInt(monthDropdown.value);
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

        // Effacer les options précédentes
        while (dayDropdown.firstChild) {
            dayDropdown.removeChild(dayDropdown.firstChild);
        }
        const option = document.createElement("option");
        option.text = "Day";
        dayDropdown.add(option);

        // Remplir le menu déroulant pour le jour
        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement("option");
            option.text = day;
            dayDropdown.add(option);
        }
    }

    // Écouter les changements dans les menus déroulants de l'année et du mois
    yearDropdown.addEventListener("change", updateDays);
    monthDropdown.addEventListener("change", updateDays);

    // Appeler la fonction d'initialisation des menus déroulants
    updateDays();

    function location(){
        const apiKey = "manax"; // Remplacez par votre clé API Geonames
        const input = document.getElementById("villeInput");
        const suggestionsDiv = document.getElementById("suggestions");

        let selectedCity = null;

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

        input.addEventListener("input", function () {
            const locationSVG = document.querySelector('.locationSVG');
            locationSVG.style.display = "none";
            const query = input.value.trim();
            if (query.length >= 3) {
                searchCities(query);
                suggestionsDiv.style.display = "block";
            } else {
                suggestionsDiv.innerHTML = "";
                suggestionsDiv.style.display = "none";
            }

            input.addEventListener("blur", function () {
                const locationSVG = document.querySelector('.locationSVG');
                locationSVG.style.display = "none";
                setTimeout(() => {
                    suggestionsDiv.style.display = "none";
                }, 200); // Ajouter un délai pour permettre la sélection de la suggestion
            });
        });

    }
    location();
}


