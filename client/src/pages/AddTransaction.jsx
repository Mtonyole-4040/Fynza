import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTransaction() {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      type,
      amount,
      description,
      date: new Date().toLocaleDateString(),
    };

    console.log("New transaction:", transaction);

    alert("Transaction added (demo)");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add Transaction
        </h1>

        <label className="block mb-2 text-sm">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <label className="block mb-2 text-sm">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          placeholder="Enter amount"
          required
        />

        <label className="block mb-2 text-sm">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded mb-6"
          placeholder="e.g. Sales, Rent"
          required
        />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
