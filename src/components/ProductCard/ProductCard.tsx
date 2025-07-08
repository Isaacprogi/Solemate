import React from "react";
import { Heart, Star } from "lucide-react";
import type { Shoe } from "../../utils/type";

interface ProductCardProps {
  shoe: Shoe;
  wishlist: number[];
  toggleWishlist: (id: number) => void;
  setSelectedShoe: (shoe: Shoe) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  shoe,
  wishlist,
  toggleWishlist,
  setSelectedShoe,
}) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="relative">
      <img
        src={shoe.image}
        alt={shoe.name}
        className="w-full h-48 object-cover"
      />
      <button
        onClick={() => toggleWishlist(shoe.id)}
        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
      >
        <Heart
          className={`w-5 h-5 ${
            wishlist.includes(shoe.id)
              ? "fill-red-500 text-red-500"
              : "text-gray-600"
          }`}
        />
      </button>
      {shoe.originalPrice && (
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          Sale
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-gray-800">{shoe.name}</h3>
        <span className="text-sm text-gray-500">{shoe.brand}</span>
      </div>
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">{shoe.rating}</span>
        </div>
        <span className="text-sm text-gray-500 ml-2">
          ({shoe.reviews} reviews)
        </span>
      </div>
      <div className="flex items-center mb-3">
        <span className="text-2xl font-bold text-gray-800">${shoe.price}</span>
        {shoe.originalPrice && (
          <span className="text-lg text-gray-500 line-through ml-2">
            ${shoe.originalPrice}
          </span>
        )}
      </div>
      <div className="flex gap-2 mb-3">
        {shoe.colors.slice(0, 3).map((color) => (
          <div
            key={color}
            className={`w-6 h-6 rounded-full border-2 border-gray-300 ${
              color === "Black"
                ? "bg-black"
                : color === "White"
                ? "bg-white"
                : color === "Red"
                ? "bg-red-500"
                : color === "Blue"
                ? "bg-blue-500"
                : color === "Navy"
                ? "bg-blue-900"
                : color === "Gray"
                ? "bg-gray-500"
                : color === "Brown"
                ? "bg-yellow-800"
                : color === "Green"
                ? "bg-green-600"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      <button
        onClick={() => setSelectedShoe(shoe)}
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
      >
        View Details
      </button>
    </div>
  </div>
);
