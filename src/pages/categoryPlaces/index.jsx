import { Link, Navigate, useParams } from "react-router-dom";

function CategoryPlaces({ categories }) {
  const { categoryId } = useParams();

  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    return <Navigate to="/categories" replace />;
  }

  return (
    <div className="district-page">
      <div className="district-header">
        <Link to="/categories" className="back-link">
          ← Back to categories
        </Link>

        <h1>
          {category.icon} {category.name}
        </h1>
      </div>

      <div className="places-grid">
        {category.places.map((place) => (
          <Link
            key={place.id}
            to={`/categories/${category.id}/places/${place.id}`}
            className="place-card"
          >
            <div className="place-emoji">{place.image}</div>
            <div className="place-info">
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <span className="view-details">View details →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPlaces;