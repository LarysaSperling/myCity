import { Link } from "react-router-dom";

function Favorites({ favorites }) {
  return (
    <div className="favorites-page">
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite places yet.</p>
      ) : (
        <div className="places-grid">
          {favorites.map((place) => (
            <div key={place.id} className="place-card">
              <div className="place-emoji">{place.image}</div>
              <div className="place-info">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;