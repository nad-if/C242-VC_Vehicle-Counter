import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div>
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Page not found.</p>
        <p className="mt-4 text-gray-500">We couldn't find the page you're looking for.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};


export default ErrorPage;
