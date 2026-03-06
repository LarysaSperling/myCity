function Home({ totalPlaces, totalFavorites, completedTodos, categories }) {
  const totalTodos = categories.reduce((total, category) => {
    return (
      total +
      category.places.reduce((placeTotal, place) => {
        return placeTotal + place.todos.length;
      }, 0)
    );
  }, 0);

  const percent = totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Travel Planner</h1>
        <p>Plan your visits, manage favorites and track your travel tasks</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>{totalPlaces}</h2>
          <p>Total places</p>
        </div>

        <div className="stat-card">
          <h2>{totalFavorites}</h2>
          <p>Favorite places</p>
        </div>

        <div className="stat-card">
          <h2>{completedTodos}</h2>
          <p>Completed tasks</p>
        </div>
      </div>

      <div className="chart-card">
        <h2>Task completion</h2>
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            margin: "20px auto",
            background: `conic-gradient(#4caf50 ${percent}%, #e0e0e0 ${percent}% 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {percent}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;