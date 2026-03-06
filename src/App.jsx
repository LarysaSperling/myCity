import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { initialCategories } from "./data";

import Layout from "./components/layout";
import Home from "./pages/home";
import Categories from "./pages/categories";
import CategoryPlaces from "./pages/categoryPlaces";
import Place from "./pages/place";
import Favorites from "./pages/favorites";
import About from "./pages/about";
import NotFound from "./pages/notFound";

function App() {
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("categories");
    return saved ? JSON.parse(saved) : initialCategories;
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (place) => {
    const exists = favorites.some((fav) => fav.id === place.id);

    if (exists) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== place.id));
    } else {
      setFavorites((prev) => [...prev, place]);
    }
  };

  const isFavorite = (placeId) => {
    return favorites.some((fav) => fav.id === placeId);
  };

  const getAllPlacesCount = () => {
    return categories.reduce((acc, category) => acc + category.places.length, 0);
  };

  const getCompletedTodosCount = () => {
    return categories.reduce((total, category) => {
      return (
        total +
        category.places.reduce((placeTotal, place) => {
          return (
            placeTotal + place.todos.filter((todo) => todo.completed).length
          );
        }, 0)
      );
    }, 0);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              totalPlaces={getAllPlacesCount()}
              totalFavorites={favorites.length}
              completedTodos={getCompletedTodosCount()}
              categories={categories}
            />
          }
        />

        <Route
          path="categories"
          element={<Categories categories={categories} />}
        />

        <Route
          path="categories/:categoryId"
          element={<CategoryPlaces categories={categories} />}
        />

        <Route
          path="categories/:categoryId/places/:placeId"
          element={
            <Place
              categories={categories}
              setCategories={setCategories}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />

        <Route
          path="favorites"
          element={<Favorites favorites={favorites} />}
        />

        <Route path="about" element={<About />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;