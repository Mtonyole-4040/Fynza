import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Fynza</h2>

        <nav className="space-y-4 flex-1">
          <p className="font-medium cursor-pointer">Dashboard</p>
          <p
            className="opacity-80 cursor-pointer"
            onClick={() => navigate("/add-transaction")}
          >
            Add Transaction
          </p>
        </nav>

        <button
          onClick={handleLogout}
          className="w-full bg-green-900 py-2 rounded hover:bg-green-800"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h1>
            <p className="text-gray-500">
              Welcome back, {user?.email}
            </p>
          </div>

          {/* Add Transaction Button */}
          <button
            onClick={() => navigate("/add-transaction")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Transaction
          </button>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Total Balance</p>
            <h2 className="text-2xl font-bold mt-2">$4,250</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Monthly Income</p>
            <h2 className="text-2xl font-bold mt-2 text-green-600">
              $2,100
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Monthly Expenses</p>
            <h2 className="text-2xl font-bold mt-2 text-red-500">
              $1,250
            </h2>
          </div>
        </div>

        {/* Recent Transactions */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-4">
            Recent Transactions
          </h3>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">Description</th>
                  <th className="p-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">2026-01-10</td>
                  <td className="p-4">Salary</td>
                  <td className="p-4 text-green-600">+ $1,500</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">2026-01-08</td>
                  <td className="p-4">Groceries</td>
                  <td className="p-4 text-red-500">- $120</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">2026-01-05</td>
                  <td className="p-4">Internet bill</td>
                  <td className="p-4 text-red-500">- $60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
