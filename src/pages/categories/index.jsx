import { Link } from "react-router-dom";

function Categories({ categories }) {
  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <p className="subtitle">Choose a category to explore places</p>

      <div className="districts-grid">
        {categories.map((category) => (
          <Link
            to={`/categories/${category.id}`}
            key={category.id}
            className="district-card"
          >
            <h2>
              {category.icon} {category.name}
            </h2>
            <p>{category.places.length} places</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;