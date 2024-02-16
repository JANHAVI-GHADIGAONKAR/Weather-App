import React from 'react';

function CountryCard({ country,backgroundColor , onClick }) {
  return (
    <div className="country-card"  onClick={() => onClick(country)}>
        {/* <h2>{country}</h2> */}
        <div class="card" style={{ backgroundColor: backgroundColor, color: 'white' }}>
            <div class="card-body">
            {country}
            </div>
        </div>
    </div>
  );
}

export default CountryCard;
