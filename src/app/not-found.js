// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white text-center px-6">
      <h1 className="text-[8rem] font-extrabold text-gray-900">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-full bg-[#6161FF] text-white text-sm font-medium hover:bg-[#5151D5] transition"
      >
        Go back home
      </Link>
    </div>
  );
}
