import { useForm } from "react-hook-form";
import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Helmet } from "@dr.pogodin/react-helmet";
import { siteTitle } from "../../Libs/Utility";
import { AuthContext } from "../../Context/AuthContext";
import SocialLogin from "../../Components/Common/SocialLogin";

// 1. Define the type for your form data
type LoginFormInputs = {
  email: string;
  password: string;
  remember?: boolean;
};

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()

  // 2. Use context, handle possible null (optional for safety)
  const auth = use(AuthContext);
  if (!auth) {
    return <div>Auth is not available</div>;
  }
  const { Login, setUser } = auth;

  // 3. onSubmit now gets typed data
  const onSubmit = (data: LoginFormInputs) => {
    const { email, password } = data;
    setErrorMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    if (!hasLowercase) {
      setErrorMessage("Password must include at least one lowercase letter.");
      return;
    }
    if (!hasUppercase) {
      setErrorMessage("Password must include at least one uppercase letter.");
      return;
    }
    if (!hasNumber) {
      setErrorMessage("Password must include at least one number.");
      return;
    }

    // Proceed to login
    Login(email, password)
      .then((result) => {
        setUser(result.user);
        // Optionally redirect or show success
        navigate("/");
      })
      .catch((err: any) => {
        setErrorMessage("Invalid email or password.");
      });
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <Helmet>
        <title>{siteTitle} | Login</title>
      </Helmet>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
      <p className="text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link to="/auth/register" className="text-green-600 font-semibold">
          Create Account
        </Link>
      </p>

      {errorMessage && (
        <div className="text-red-600 text-sm font-medium">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Email Address</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className="w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-sm text-gray-500"
              onClick={() => setShowPassword(prev => !prev)}
            >
              👁️
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("remember")}
              className="form-checkbox mr-2"
            />
            <span className="text-sm">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-sm text-green-600 font-semibold">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Sign In
        </button>
      </form>

      <div className="text-center text-sm text-gray-500 mt-4">or continue with</div>
      <div className="text-center">
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
