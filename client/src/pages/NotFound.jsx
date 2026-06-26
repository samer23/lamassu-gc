import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-6xl font-bold text-[#4A4A4A]">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-xl text-gray-600">
        The page you are looking for may have been moved, deleted, or does not exist.
        Please use the navigation above or return to the homepage.
      </p>

      <Link to="/" className="mt-8 inline-block rounded-md bg-[#2B3E34] px-6 py-3 text-[#F7F5F0] font-medium hover:bg-[#E07A5F] transition">
        Return to Home
      </Link>
    </div>
  )
}