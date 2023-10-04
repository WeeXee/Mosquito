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
        console.log("zob dans le cul")
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
            "<h1>Zob</h1>"+

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

        function nextStep() {
            let centerOne = document.querySelector('.container__centerOne');
            let centerTwo = document.querySelector('.container__centerTwo');
            /*let centerThree = document.querySelector('.container__centerThree');
            let centerFour = document.querySelector('.container__centerFour');
            let centerFive = document.querySelector('.container__centerFive');*/

            if (centerOne.style.display != "none") {

                /*centerThree.style.display = "none";
                centerFour.style.display = "none";
                centerFive.style.display = "none";*/

                //add animation NexStep and PreviousStep

                centerOne.style.animation = "PrevStep 0.7s";
                centerOne.style.animationFillMode = "forwards";
                setTimeout(function() {
                    centerTwo.style.display = "flex";
                    centerTwo.style.animation = "PrevStep2 0.7s";
                    centerTwo.style.animationFillMode = "forwards";
                }, 700);


                /*centerOne.style.display = "none";*/
            } /*else if (centerTwo.style.display === "flex") {
                centerOne.style.display = "none";
                centerTwo.style.display = "none";
                centerThree.style.display = "flex";
                centerFour.style.display = "none";
                centerFive.style.display = "none";
            } else if (centerThree.style.display === "flex") {
                centerOne.style.display = "none";
                centerTwo.style.display = "none";
                centerThree.style.display = "none";
                centerFour.style.display = "flex";
                centerFive.style.display = "none";
            } else if (centerFour.style.display === "flex") {
                centerOne.style.display = "none";
                centerTwo.style.display = "none";
                centerThree.style.display = "none";
                centerFour.style.display = "none";
                centerFive.style.display = "flex";
            } else if (centerFive.style.display === "flex") {
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
            /*let centerThree = document.querySelector('.container__centerThree');
            let centerFour = document.querySelector('.container__centerFour');
            let centerFive = document.querySelector('.container__centerFive');*/

            if (centerOne.style.display === "flex") {
                centerOne.style.display = "none";
                centerTwo.style.display = "flex";
                /*centerThree.style.display = "none";
                centerFour.style.display = "none";
                centerFive.style.display = "flex";*/
            } /*else if (centerTwo.style.display === "flex") {
                centerOne.style.display = "flex";
                centerTwo.style.display = "none";
                centerThree.style.display = "none";
                centerFour.style.display = "none";
                centerFive.style.display = "none";
            } else if (centerThree.style.display === "flex") {
                centerOne.style.display = "none";
                centerTwo.style.display = "flex";
                centerThree.style.display = "none";
                centerFour.style.display = "none";
                centerFive.style.display = "none";
            } else if (centerFour.style.display === "flex") {
                centerOne.style.display = "none";
                centerTwo.style.display = "none";
                centerThree.style.display = "flex";
                centerFour.style.display = "none";
                centerFive.style.display = "none";
            } else if (centerFive.style.display === "flex") {
                centerOne.style.display = "none";
                centerTwo.style.display = "none";
                centerThree.style.display = "none";
                centerFour.style.display = "flex";
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
