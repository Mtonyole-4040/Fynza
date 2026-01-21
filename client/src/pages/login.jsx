export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-2">Fynza</h1>
        <p className="text-center text-gray-500 mb-6">Smart finance, simplified.</p>

        <input
          type="email"
          placeholder="Email address"
          className="w-full mb-4 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Sign in
        </button>

        <div className="flex justify-between mt-4 text-sm text-green-600">
          <span className="cursor-pointer">Forgot password?</span>
          <span className="cursor-pointer">Create account</span>
        </div>
      </div>
    </div>
  );
}
