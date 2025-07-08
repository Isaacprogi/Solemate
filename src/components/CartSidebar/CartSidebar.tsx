import React from 'react';
import { X, Minus, Plus } from 'lucide-react'
import type { CartItem } from '../../utils/type';

interface CartSidebarProps {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cart: CartItem[];
  updateQuantity: (
    id: number,
    selectedColor: string,
    selectedSize: string,
    delta: number
  ) => void;
  removeFromCart: (
    id: number,
    selectedColor: string,
    selectedSize: string
  ) => void;
  getTotalPrice: () => number;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  showCart,
  setShowCart,
  cart,
  updateQuantity,
  removeFromCart,
  getTotalPrice,
}) => {
  return (
    showCart && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[200000]">
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Shopping Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {cart.map((item, index) => (
                    <div
                      key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          {item.selectedColor} • Size {item.selectedSize}
                        </p>
                        <p className="font-semibold">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.selectedColor, item.selectedSize, -1)
                          }
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.selectedColor, item.selectedSize, 1)
                          }
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          removeFromCart(item.id, item.selectedColor, item.selectedSize)
                        }
                        className="p-1 hover:bg-gray-200 rounded text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CartSidebar;
