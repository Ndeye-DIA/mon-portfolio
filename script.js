document.addEventListener("DOMContentLoaded", function () {

    const projets = document.querySelectorAll(".projet-grand");

    projets.forEach(function (projet) {
        projet.addEventListener("click", function () {

            const competences = projet.nextElementSibling;

            if (competences) {
                competences.classList.toggle("visible");
            }
        });
    });

});



