import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Firebase বা backend এ পাঠাতে পারো
  };

  const password = watch("password");

  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="w-full max-w-xl bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 rounded-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Sign in
        </h2>

        <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      

            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-2">
                Email *
              </label>
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
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Password */}
            <div>
              <label className="block text-white font-medium mb-2">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  {...register("password", {
                    required: "Password is required",
                    minLength: 6,
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
                  {showPassword ? (
                    <FaEyeSlash size={18} className=" text-black" />
                  ) : (
                    <FaEye size={18} className=" text-black" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message ||
                    "Password must be at least 6 characters"}
                </p>
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
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.confirmPassword
                      ? "border-red-400"
                      : "border-blue-400/50"
                  } rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className=" text-black" size={18} />
                  ) : (
                    <FaEye className=" text-black" size={18} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="block text-white font-medium mb-2">
                Select Role *
              </label>
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
         <p
  to="/register"
  className="flex justify-center items-center text-center text-white"
>
  You have no Account? <Link to="/register" className="underline">Register</Link>
</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
