function Transactions() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Amount</th>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
