document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el selector de fechas
    flatpickr("#date", {
        dateFormat: "Y-m-d"
    });

    const packages = [
        {
            name: "Paquete Básico",
            description: "Visita de 1-2 horas, presupuesto bajo.",
            price: "40,000 COP",
            image: "paquete1.jpg",
            activities: "Museo de Oro + Parque Nacional"
        },
        {
            name: "Paquete Premium",
            description: "Visita de 2-4 horas, presupuesto medio.",
            price: "80,000 COP",
            image: "paquete2.jpg",
            activities: "Museo Botero + Restaurante Local"
        },
        {
            name: "Paquete VIP",
            description: "Visita de más de 4 horas, presupuesto alto.",
            price: "150,000 COP",
            image: "paquete3.jpg",
            activities: "Tour guiado por la ciudad + almuerzo gourmet"
        }
    ];

    const packageList = document.getElementById('package-list');

    function displayPackages() {
        packageList.innerHTML = '';
        packages.forEach(packageInfo => {
            const packageElement = document.createElement('div');
            packageElement.classList.add('package');
            packageElement.innerHTML = `
                <img src="${packageInfo.image}" alt="${packageInfo.name}">
                <div class="package-info">
                    <h3>${packageInfo.name}</h3>
                    <p>${packageInfo.description}</p>
                    <p><strong>Actividades:</strong> ${packageInfo.activities}</p>
                    <p><strong>Precio:</strong> ${packageInfo.price}</p>
                </div>
            `;
            packageList.appendChild(packageElement);
        });
    }

    displayPackages(); // Llamamos a la función para mostrar los paquetes al cargar la página.

    // Filtrar paquetes según los filtros
    const filterForm = document.getElementById('filter-form');
    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const time = document.getElementById('time').value;
        const budget = document.getElementById('budget').value;
        
        const filteredPackages = packages.filter(packageInfo => {
            if (time === '1' && packageInfo.description.includes('1-2 horas')) return true;
            if (time === '2' && packageInfo.description.includes('2-4 horas')) return true;
            if (time === '3' && packageInfo.description.includes('más de 4 horas')) return true;
            return false;
        });

        packageList.innerHTML = '';
        filteredPackages.forEach(packageInfo => {
            const packageElement = document.createElement('div');
            packageElement.classList.add('package');
            packageElement.innerHTML = `
                <img src="${packageInfo.image}" alt="${packageInfo.name}">
                <div class="package-info">
                    <h3>${packageInfo.name}</h3>
                    <p>${packageInfo.description}</p>
                    <p><strong>Actividades:</strong> ${packageInfo.activities}</p>
                    <p><strong>Precio:</strong> ${packageInfo.price}</p>
