import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import Swal from 'sweetalert2'

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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

    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Show success message
      Swal.fire({
        title: "Registration Successful!",
        text: "Redirecting to login...",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      // Redirect after 3 seconds
      setTimeout(() => {
        navigate("/"); // Change this to "/login" if that's your login route
      }, 3000);
    } else {
      // Show error message
      Swal.fire({
        title: "Registration Failed",
        text: data.message || "Something went wrong. Please try again.",
        icon: "error",
      });
    }

    console.log(data);
  };



  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            Register
          </button>

          <p className="flex justify-center font-bold">__________________ or __________________</p>
          
          <button
            onClick={() => window.location.href = "http://localhost:5000/auth/google"}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 mt-4"
          >
            Continue with Google
          </button>

          <button
            onClick={() => window.location.href = "http://localhost:5000/auth/microsoft"}
            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 mt-2"
          >
            Continue with Microsoft
          </button>

        </form>
        <p className="text-center text-sm mt-4">
          Already have an account? <NavLink to="/" className="text-blue-600">Login</NavLink>
        </p>

      </div>

    </div>
  );
}

export default Register;
