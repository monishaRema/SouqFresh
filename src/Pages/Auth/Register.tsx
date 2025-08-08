import { Helmet } from "@dr.pogodin/react-helmet";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { siteTitle } from "../../Libs/Utility";

import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

type RegisterFormInputs = {
  name: string;
  photoUrl?: string;
  email: string;
  password: string;
};

const Register = () => {
  const { CreateUser, setUser, Logout } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // react-hook-form setup, with validation rules
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();

  // Custom password validation
  const validatePassword = (password: string) => {
    if (password.length < 6) return "Password must be at least 6 characters long.";
    if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter.";
    if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter.";
    if (!/[0-9]/.test(password)) return "Password must include at least one number.";
    return true;
  };

  // Custom email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    return true;
  };

  // You can add UpdateUser logic if needed (Firebase does have updateProfile)
  // import { updateProfile } from "firebase/auth"; and call after registration

  const onSubmit = async (data: RegisterFormInputs) => {
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const result = await CreateUser(data.email, data.password);
      setUser(result.user);

      // Optionally update profile
      // await updateProfile(result.user, { displayName: data.name, photoURL: data.photoUrl });

      // Immediately log out for security, then ask user to log in
      await Logout();
      Swal.fire("Registration Successful", "Please login to continue.", "success");
      navigate("/auth/login");
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to create account. Please try again.");
    }
  }; 

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <Helmet>
        <title>{siteTitle} | Register</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Account</h2>
      <p className="text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-green-600 font-semibold">
          Sign In
        </Link>
      </p>

      {errorMessage && <div className="text-red-600 text-sm font-medium">{errorMessage}</div>}
      {successMessage && <div className="text-green-600 text-sm font-medium">{successMessage}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Photo URL</label>
          <input
            type="url"
            {...register("photoUrl")}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email Address</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              validate: validateEmail,
            })}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              validate: validatePassword,
            })}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
