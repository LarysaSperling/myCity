import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { todosData } from "../../data.js";

function Place({
  categories,
  setCategories,
  toggleFavorite,
  isFavorite,
  loading,
  setLoading,
}) {
  const { categoryId, placeId } = useParams();

  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");

  const category = categories.find((cat) => cat.id === categoryId);
  const place = category?.places.find((item) => item.id === placeId);

  useEffect(() => {
    if (!categoryId || !placeId) return;

    setLoading(true);

    const timer = setTimeout(() => {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === categoryId
            ? {
                ...cat,
                places: cat.places.map((p) =>
                  p.id === placeId
                    ? {
                        ...p,
                        todos:
                          p.todos.length > 0
                            ? p.todos
                            : todosData[placeId] || [],
                      }
                    : p
                ),
              }
            : cat
        )
      );

      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  }, [categoryId, placeId, setCategories, setLoading]);

  if (!category) {
    return <Navigate to="/categories" replace />;
  }

  if (!place) {
    return <Navigate to={`/categories/${categoryId}`} replace />;
  }

  const todos = place.todos || [];

  let filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  if (sortType === "active") {
    filteredTodos = [...filteredTodos].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  }

  if (sortType === "completed") {
    filteredTodos = [...filteredTodos].sort(
      (a, b) => Number(b.completed) - Number(a.completed)
    );
  }

  const addTodo = () => {
    const trimmed = newTodo.trim();

    if (!trimmed) return;

    const todo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              places: cat.places.map((p) =>
                p.id === placeId
                  ? { ...p, todos: [...p.todos, todo] }
                  : p
              ),
            }
          : cat
      )
    );

    setNewTodo("");
  };

  const toggleTodo = (todoId) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              places: cat.places.map((p) =>
                p.id === placeId
                  ? {
                      ...p,
                      todos: p.todos.map((todo) =>
                        todo.id === todoId
                          ? { ...todo, completed: !todo.completed }
                          : todo
                      ),
                    }
                  : p
              ),
            }
          : cat
      )
    );
  };

  const deleteTodo = (todoId) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              places: cat.places.map((p) =>
                p.id === placeId
                  ? {
                      ...p,
                      todos: p.todos.filter((todo) => todo.id !== todoId),
                    }
                  : p
              ),
            }
          : cat
      )
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const progress =
    todos.length === 0 ? 0 : (completedCount / todos.length) * 100;

  return (
    <div className="place-page">
      <div className="place-header">
        <Link to={`/categories/${categoryId}`} className="back-link">
          ← Back to category
        </Link>
      </div>

      <div className="place-detail">
        <div className="place-emoji-large">{place.image}</div>
        <h1>{place.name}</h1>
        <p className="place-full-description">{place.description}</p>

        <button onClick={() => toggleFavorite(place)} className="cta-button">
          {isFavorite(place.id) ? "Remove from favorites" : "Add to favorites"}
        </button>

        <div className="todo-section">
          <h2>TODO List</h2>

          {loading ? (
            <p>Loading tasks...</p>
          ) : (
            <>
              <div className="todo-controls">
                <input
                  type="text"
                  id="newTodo"
                  name="newTodo"
                  placeholder="Add a new task"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") addTodo();
                  }}
                />
                <button onClick={addTodo}>Add</button>
              </div>

              <div className="todo-controls">
                <input
                  type="text"
                  id="searchTodo"
                  name="searchTodo"
                  placeholder="Search tasks"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={() => setSortType("active")}>
                  Active first
                </button>
                <button onClick={() => setSortType("completed")}>
                  Completed first
                </button>
                <button onClick={() => setSortType("default")}>Default</button>
              </div>

              <p>
                Completed: {completedCount} / {todos.length}
              </p>

              <div
                style={{
                  width: "100%",
                  height: "10px",
                  background: "#ddd",
                  borderRadius: "6px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    background: "#4caf50",
                    borderRadius: "6px",
                  }}
                />
              </div>

              {filteredTodos.length === 0 ? (
                <p>No tasks found.</p>
              ) : (
                <ul className="todo-list">
                  {filteredTodos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                      <label>
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => toggleTodo(todo.id)}
                        />
                        <span
                          style={{
                            textDecoration: todo.completed
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {todo.text}
                        </span>
                      </label>

                      <button onClick={() => deleteTodo(todo.id)}>
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Place;