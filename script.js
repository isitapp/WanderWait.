document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('plan-form');
    const planResults = document.getElementById('plan-results');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        const time = document.getElementById('time').value;
        const budget = document.getElementById('budget').value;
        const interests = document.getElementById('interests').value;

        let planMessage = "Aquí está tu plan basado en tus respuestas:<br>";

        // Personaliza el plan dependiendo del tiempo, presupuesto e intereses
        if (time === '1') {
            planMessage += "Tienes entre 1 y 2 horas. Te recomendamos explorar un museo cercano o un parque.<br>";
        } else if (time === '2') {
            planMessage += "Tienes entre 2 y 4 horas. Te sugerimos una caminata por la ciudad o disfrutar de una experiencia gastronómica.<br>";
        } else {
            planMessage += "Tienes más de 4 horas. Puedes aprovechar para realizar un tour más largo o una actividad cultural en profundidad.<br>";
        }

        if (budget === '1') {
            planMessage += "Tu presupuesto es bajo, por lo que te recomendamos actividades gratuitas o de bajo costo.<br>";
        } else if (budget === '2') {
            planMessage += "Tu presupuesto es medio, así que puedes acceder a tours o actividades interesantes a precios razonables.<br>";
        } else {
            planMessage += "Tu presupuesto es alto, ¡así que puedes elegir experiencias premium o más exclusivas!<br>";
        }

        if (interests) {
            planMessage += Has mencionado que te interesan: ${interests}. ¡Aquí tienes algunas opciones para ti!<br>;
        }

        // Mostrar los resultados en la página
        planResults.innerHTML = planMessage;
    });
});
