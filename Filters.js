import React from 'react';

const Filters = ({ setFilters }) => {
  return (
    <div className="filters">
      <label>Presupuesto:</label>
      <select onChange={(e) => setFilters(prev => ({ ...prev, budget: e.target.value }))}>
        <option value="">Todos</option>
        <option value="40,000">Bajo</option>
        <option value="80,000">Medio</option>
        <option value="150,000">Alto</option>
      </select>

      <label>Duración:</label>
      <select onChange={(e) => setFilters(prev => ({ ...prev, time: e.target.value }))}>
        <option value="">Todos</option>
        <option value="1-2 horas">Corto</option>
        <option value="2-4 horas">Medio</option>
        <option value="4+ horas">Largo</option>
      </select>
    </div>
  );
};

export default Filters;
