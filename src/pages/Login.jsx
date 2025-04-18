import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import Swal from 'sweetalert2';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "warning",
      });
      return;
    }

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      // Show login success alert
      Swal.fire({
        title: "Login Successful!",
        text: "Redirecting to dashboard...",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/dashboard/dashboard");
      }, 2000);
    } else {
      Swal.fire({
        title: "Login Failed",
        text: data.message || "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const handleMicrosoftLogin = () => {
    window.location.href = "http://localhost:5000/auth/microsoft";
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          <p className="flex justify-center font-bold">__________________ or __________________</p>

          <div className="mt-4 space-y-2">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" />
              Continue with Google
            </button>

            <button
              onClick={handleMicrosoftLogin}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <img src="https://img.icons8.com/fluency/24/000000/microsoft.png" alt="Microsoft" />
              Continue with Microsoft
            </button>
          </div>

        </form>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-blue-600">
            Register Now!
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
