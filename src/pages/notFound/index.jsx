import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-link">
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;