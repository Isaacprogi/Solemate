 import  type { Shoe } from "../../utils/type";
 import { useState } from "react";
 import {X,Star} from 'lucide-react'
 
 export const ProductModal = ({ shoe, onClose,addToCart }: { shoe: Shoe; onClose: () => void, addToCart:(shoe:Shoe,selectedColor:string,selectedSize:string)=>void }) => {
    const [selectedColor, setSelectedColor] = useState(shoe.colors[0]);
    const [selectedSize, setSelectedSize] = useState(shoe.sizes[0]);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[1000]">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{shoe.name}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={shoe.image} 
                  alt={shoe.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              
              <div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500 font-medium">{shoe.brand}</span>
                  <div className="flex items-center mt-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-lg">{shoe.rating}</span>
                    <span className="text-gray-500 ml-2">({shoe.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold text-gray-800">${shoe.price}</span>
                    {shoe.originalPrice && (
                      <span className="text-xl text-gray-500 line-through ml-3">${shoe.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{shoe.description}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Color</h4>
                  <div className="flex gap-2">
                    {shoe.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedColor === color ? 'border-black' : 'border-gray-300'
                        } ${
                          color === 'Black' ? 'bg-black' :
                          color === 'White' ? 'bg-white' :
                          color === 'Red' ? 'bg-red-500' :
                          color === 'Blue' ? 'bg-blue-500' :
                          color === 'Navy' ? 'bg-blue-900' :
                          color === 'Gray' ? 'bg-gray-500' :
                          color === 'Brown' ? 'bg-yellow-800' :
                          color === 'Green' ? 'bg-green-600' :
                          'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Size</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {shoe.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-4 border rounded-lg text-center ${
                          selectedSize === size 
                            ? 'border-black bg-black text-white' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="space-y-1">
                    {shoe.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => {
                    addToCart(shoe, selectedColor, selectedSize);
                    onClose();
                  }}
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };