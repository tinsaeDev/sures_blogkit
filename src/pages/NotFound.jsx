import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="error-page d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-3">404 - Page Not Found</h1>
      <p className="text-center">The page you're looking for does not exist.</p>
      <Link to="/" className="btn btn-primary rounded mt-3">
        Go back to Home
      </Link>
    </div>
  );
}
