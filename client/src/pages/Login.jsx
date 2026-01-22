import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login("user@example.com");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-2 text-center">Fynza</h1>
        <p className="text-center text-gray-500 mb-6">
          Smart finance, simplified.
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded"
          required
        />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Sign in
        </button>

        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Forgot password?</span>
          <Link to="/register" className="text-green-600">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
