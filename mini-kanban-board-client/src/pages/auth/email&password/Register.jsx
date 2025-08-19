import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
// import useAxiosInstance from "../../../hooks/useAxiosInstance";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const { createUser, updateUserProfile, setLoading, setUser } = useAuth();
  // const axiosInstance = useAxiosInstance();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password } = data;
    const displayName = `${firstName} ${lastName}`;
    const uploadedImage = ""; // যদি পরে ফটো upload করো

    setLoading(true);
    setError("");

    try {
      // Firebase create user
      const result = await createUser(email, password);

      // Update displayName & photoURL
      await updateUserProfile({ displayName, photoURL: uploadedImage });

      // Success toast
      toast.success(
        from
          ? "SignUp successfully! Redirecting to your previous page..."
          : "SignUp successfully! Redirecting to home page..."
      );

      // // Save user to DB
      // const { confirmPassword, ...userData } = data;
      // const userInfoDB = {
      //   ...userData,
      //   uid: result.user.uid,
      //   created_at: new Date().toISOString(),
      //   last_log_in: new Date().toISOString(),
      //   photo: uploadedImage,
      // };

      // await axiosInstance.post("/users", userInfoDB);

      setUser(result.user);
      navigate(from);
    } catch (err) {
      console.error(err);
      switch (err.code) {
        case "auth/invalid-credential":
          setError("Invalid email or password. Please check and try again.");
          break;
        case "auth/email-already-in-use":
          setError(
            "This email is already registered. Please login or use another email."
          );
          break;
        default:
          setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-xl bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 rounded-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Register
        </h2>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-white font-medium mb-2">
                First Name *
              </label>
              <input
                type="text"
                placeholder="John"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className={`w-full px-4 py-3 bg-white/10 border ${
                  errors.firstName ? "border-red-400" : "border-blue-400/50"
                } rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors`}
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-white font-medium mb-2">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Doe"
                {...register("lastName", { required: "Last Name is required" })}
                className={`w-full px-4 py-3 bg-white/10 border ${
                  errors.lastName ? "border-red-400" : "border-blue-400/50"
                } rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors`}
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-2">Email *</label>
              <input
                type="email"
                placeholder="john@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-3 bg-white/10 border ${
                  errors.email ? "border-red-400" : "border-blue-400/50"
                } rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-white font-medium mb-2">Password *</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                  })}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.password ? "border-red-400" : "border-blue-400/50"
                  } rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-white font-medium mb-2">
                Confirm Password *
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === password || "Passwords do not match",
                  })}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.confirmPassword ? "border-red-400" : "border-blue-400/50"
                  } rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                >
                  {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="block text-white font-medium mb-2">Select Role *</label>
              <select
                {...register("role")}
                className="w-full px-4 py-3 bg-blue-700 border border-blue-400/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              >
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Member">Member</option>
                <option value="Intern">Intern</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transform hover:scale-[1.02] transition-all duration-200"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          <p className="flex justify-center items-center text-center text-white">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
