import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Fynza</h1>
        <p className="text-center text-gray-500 mb-6">
          Smart finance, simplified.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Sign in
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span className="cursor-pointer hover:underline">
            Forgot password?
          </span>

          <Link
            to="/register"
            className="text-green-600 hover:underline font-medium"
          >
            Create account
          </Link>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 Fynza. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
