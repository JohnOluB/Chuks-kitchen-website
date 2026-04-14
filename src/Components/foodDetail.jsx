import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// -----------------------------------------------------------
// Replace with your actual import: import { foods } from "../data/foods";
// -----------------------------------------------------------
const foods = [
  {
    id: 1,
    name: "Jollof Rice with Fried Chicken",
    price: 2800,
    image: "https://via.placeholder.com/600x500?text=Food+Image",
    description:
      "Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavour and satisfying. Perfect for a quick lunch or a hearty dinner.",
    tags: ["Mildly spicy", "Vegetarian option available"],
    proteins: [
      { label: "Fried Chicken", price: 0, note: "(Default)" },
      { label: "Grilled Fish", price: 500 },
      { label: "Beef", price: 700 },
    ],
    extras: [
      { label: "Fried Plantain", price: 700 },
      { label: "Coleslaw", price: 500 },
      { label: "Extra Pepper Sauce", price: 300 },
    ],
  },
];

export default function FoodDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = foods.find((f) => f.id === Number(id));

  const [selectedProtein, setSelectedProtein] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-gray-500 text-lg">Item not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
        >
          ← Go back
        </button>
      </div>
    );
  }

  function toggleExtra(index) {
    setSelectedExtras((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  }

  const proteinExtra = item.proteins[selectedProtein].price || 0;
  const extrasTotal = selectedExtras.reduce(
    (sum, i) => sum + item.extras[i].price,
    0,
  );
  const total = (item.price + proteinExtra + extrasTotal) * quantity;

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* ── Left: Image ── */}
      <div className="relative w-1/2 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-600 hover:bg-gray-100 transition text-sm"
        >
          ✕
        </button>
      </div>

      {/* ── Right: Details ── */}
      <div className="flex-1 px-10 py-8 overflow-y-auto max-h-screen">
        {/* Name & Price */}
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{item.name}</h1>
        <p className="text-xl font-bold text-orange-500 mb-3">
          ₦{item.price.toLocaleString()}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-500 rounded-full px-3 py-1"
            >
              🌶 {tag}
            </span>
          ))}
          <span className="text-xs bg-orange-50 text-orange-500 rounded-full px-3 py-1 cursor-pointer hover:bg-orange-100 transition">
            🌿 View Allergies
          </span>
        </div>

        <hr className="border-gray-100 my-4" />

        {/* Choose Protein */}
        <p className="text-sm font-semibold text-gray-800 mb-3">
          Choose Your Protein
        </p>
        <div className="flex flex-col gap-3 mb-2">
          {item.proteins.map((protein, i) => (
            <label
              key={i}
              className="flex items-center gap-3 cursor-pointer text-sm text-gray-700"
            >
              <input
                type="radio"
                name="protein"
                checked={selectedProtein === i}
                onChange={() => setSelectedProtein(i)}
                className="accent-orange-500 w-4 h-4 cursor-pointer"
              />
              <span className="flex-1">{protein.label}</span>
              <span className="text-gray-400 text-xs">
                {protein.price
                  ? `+₦${protein.price.toLocaleString()}`
                  : protein.note || ""}
              </span>
            </label>
          ))}
        </div>

        <hr className="border-gray-100 my-4" />

        {/* Extra Sides */}
        <p className="text-sm font-semibold text-gray-800 mb-3">
          Extra Sides (Optional)
        </p>
        <div className="flex flex-col gap-3 mb-2">
          {item.extras.map((extra, i) => (
            <label
              key={i}
              className="flex items-center gap-3 cursor-pointer text-sm text-gray-700"
            >
              <input
                type="checkbox"
                checked={selectedExtras.includes(i)}
                onChange={() => toggleExtra(i)}
                className="accent-orange-500 w-4 h-4 cursor-pointer rounded"
              />
              <span className="flex-1">{extra.label}</span>
              <span className="text-gray-400 text-xs">
                +₦{extra.price.toLocaleString()}
              </span>
            </label>
          ))}
        </div>

        <hr className="border-gray-100 my-4" />

        {/* Special Instructions */}
        <p className="text-sm font-semibold text-gray-800 mb-3">
          Special Instructions
        </p>
        <textarea
          rows={3}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="E.g. no onion, food is too spicy, food is too hot..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-orange-400 transition"
        />

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-4 mt-6">
          {/* Quantity counter */}
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-9 h-11 text-lg text-gray-600 hover:bg-gray-100 transition"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-semibold text-gray-800">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-9 h-11 text-lg text-gray-600 hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>

          {/* Add to cart button */}
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white font-semibold text-sm py-3 rounded-lg">
            Add to Cart — ₦{total.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
}
