import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottieData from "../assets/lottie/login.json";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const LogIn = () => {
  const { signInUser, setUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const provider = new GoogleAuthProvider();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          timer: 2000,
          confirmButtonColor: "#8C52FF"
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        setError({ ...error, login: err.message });
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Please check your credentials.",
          timer: 2000,
          confirmButtonColor: "#8C52FF"
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Google Sign-In Successful",
          timer: 2000,
          confirmButtonColor: "#8C52FF"
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          timer: 2000,
          confirmButtonColor: "#8C52FF"
        });
      });
  };

  useEffect(() => {
    if (!!user && typeof window !== "undefined") {
      window.location.replace("/");
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-white to-[#f4f4f7] dark:from-slate-900 dark:to-slate-800 px-6">
      <div className="w-full max-w-md mx-auto lg:mr-12 mb-8 lg:mb-0">
        <Lottie animationData={loginLottieData} loop={true} />
      </div>

      <div className="card w-full max-w-md p-8 bg-white dark:bg-slate-800 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#8C52FF] mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {error.login && (
              <p className="text-sm text-red-600 mt-1">{error.login}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#8C52FF] text-white hover:bg-violet-700 transition mb-4"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-4">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-[#8C52FF] font-medium">
            Register
          </Link>
        </p>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full border border-gray-300 flex items-center gap-2"
        >
          <FcGoogle className="text-2xl" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
