import React from 'react';

interface SearchHistoryProps {
  history: string[];
  onCitySelect: (city: string) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ history, onCitySelect }) => {
  return (
    <div className="search-history">
      <h2>Historial de busqueda</h2>
      <ul>
        {history.map((city, index) => (
          <li key={index} onClick={() => onCitySelect(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;