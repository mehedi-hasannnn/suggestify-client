import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import registerLottieData from "../assets/lottie/Animation - 1734851473080.json";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, user, setUser, updateUserProfile } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        toast.success("Google sign-in successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Google sign-in failed! Please try again.");
        console.error(error);
      });
  };

  useEffect(() => {
    if (user && typeof window !== "undefined") {
      window.location.replace("/");
    }
  }, [user]);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    let hasError = false;
    const newErrors = {};

    if (name.length < 4) {
      newErrors.name = "Name must be at least 4 characters long.";
      hasError = true;
    }

    if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must include at least one uppercase letter.";
      hasError = true;
    }

    if (!/[a-z]/.test(password)) {
      newErrors.password = "Password must include at least one lowercase letter.";
      hasError = true;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      hasError = true;
    }

    if (hasError) {
      setError(newErrors);
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((error) => {
            toast.error("Profile update failed. Please try again.");
            console.error(error);
          });
      })
      .catch((error) => {
        toast.error(`Registration failed: ${error.message}`);
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20 py-10 gap-10">
      <div className="w-[300px] sm:w-[400px] lg:w-[500px]">
        <Lottie animationData={registerLottieData} loop />
      </div>

      <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-8">
        <ToastContainer position="top-right" />
        <h2 className="text-3xl font-bold text-center mb-6 text-[#6836c7]">
          Register your account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
            {error.name && <p className="text-xs text-red-600 mt-1">{error.name}</p>}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Profile picture URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="relative">
            <label className="block font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute top-10 right-4"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {error.password && <p className="text-xs text-red-600 mt-1">{error.password}</p>}
          </div>

          <button
            type="submit"
            className="btn w-full text-white bg-[#6836c7] hover:bg-[#572bb0]"
          >
            Register
          </button>
        </form>

        <p className="text-center font-medium mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-[#6836c7] underline">
            Login
          </Link>
        </p>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full border border-gray-300 hover:border-black"
        >
          <FcGoogle className="text-2xl mr-2" /> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
