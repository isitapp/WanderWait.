import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PackageList from './components/PackageList';
import Filters from './components/Filters';

function App() {
  const [packages, setPackages] = useState([]);
  const [filters, setFilters] = useState({ budget: '', time: '' });

  useEffect(() => {
    // Simulamos la carga de paquetes desde una base de datos o API
    const fetchedPackages = [
      { id: 1, name: "Paquete Básico", description: "1-2 horas", price: "40,000 COP", image: "/images/package1.jpg", details: "Recorrido corto por los sitios más emblemáticos de Bogotá." },
      { id: 2, name: "Paquete Premium", description: "2-4 horas", price: "80,000 COP", image: "/images/package2.jpg", details: "Visita a monumentos y museos con guía especializado." },
      { id: 3, name: "Paquete VIP", description: "4+ horas", price: "150,000 COP", image: "/images/package3.jpg", details: "Recorrido privado con almuerzo incluido y atención personalizada." },
    ];
    setPackages(fetchedPackages);
  }, []);

  return (
    <div className="App">
      <Header />
      <Filters setFilters={setFilters} />
      <PackageList packages={packages} filters={filters} />
    </div>
  );
}

export default App;
