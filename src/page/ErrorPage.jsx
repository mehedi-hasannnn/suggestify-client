import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfcff] to-[#f0f1ff] px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm font-semibold text-[#8b5cf6] uppercase">404 Error</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-4">
            Page not found
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Oops! The page you’re looking for doesn’t exist. Let’s get you back on track.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Go back
            </button>

            <Link
              to="/"
              className="px-6 py-2.5 text-sm font-medium text-white bg-[#8b5cf6] rounded-lg hover:bg-[#7c3aed] transition"
            >
              Take me home
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co.com/VcTqqJpk/404error.jpg"
            alt="404 Error"
            className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
