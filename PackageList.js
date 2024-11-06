import React from 'react';
import './PackageList.css';

const PackageList = ({ packages, filters }) => {
  const filteredPackages = packages.filter(pkg => {
    return (
      (!filters.budget || pkg.price.includes(filters.budget)) &&
      (!filters.time || pkg.description.includes(filters.time))
    );
  });

  return (
    <div className="package-list">
      {filteredPackages.map(pkg => (
        <div className="package-item" key={pkg.id}>
          <img src={pkg.image} alt={pkg.name} />
          <h3>{pkg.name}</h3>
          <p>{pkg.description}</p>
          <p>{pkg.price}</p>
          <p>{pkg.details}</p>
          <button>Ver más</button>
        </div>
      ))}
    </div>
  );
};

export default PackageList;
