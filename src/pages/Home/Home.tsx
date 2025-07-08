import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductModal } from "../../components/modal/ProductModal";
import type { Shoe, CartItem } from "../../utils/type";
import { shoes } from "../../data/data";
import Hero from "../../components/Hero/Hero";
import CartSidebar from "../../components/CartSidebar/CartSidebar";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const categories = ["All", "Running", "Casual", "Tennis", "Hiking"];
const brands = [
  "All",
  "Nike",
  "Adidas",
  "Puma",
  "Merrell",
  "New Balance",
  "Reebok",
];

export default function Home() {
  const [filteredShoes, setFilteredShoes] = useState<Shoe[]>(shoes);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState<Shoe | null>(null);
  const [_, setShowMobileMenu] = useState(false);

  useEffect(() => {
    let filtered = shoes;

    if (searchQuery) {
      filtered = filtered.filter(
        (shoe) =>
          shoe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          shoe.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((shoe) => shoe.category === selectedCategory);
    }

    if (selectedBrand !== "All") {
      filtered = filtered.filter((shoe) => shoe.brand === selectedBrand);
    }

    filtered = filtered.filter(
      (shoe) => shoe.price >= priceRange[0] && shoe.price <= priceRange[1]
    );

    setFilteredShoes(filtered);
  }, [searchQuery, selectedCategory, selectedBrand, priceRange]);

  const addToCart = (shoe: Shoe, color: string, size: string) => {
    const existingItem = cart.find(
      (item) =>
        item.id === shoe.id &&
        item.selectedColor === color &&
        item.selectedSize === size
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id &&
          item.selectedColor === color &&
          item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { ...shoe, quantity: 1, selectedColor: color, selectedSize: size },
      ]);
    }
  };

  const updateQuantity = (
    id: number,
    color: string,
    size: string,
    change: number
  ) => {
    setCart(
      cart
        .map((item) => {
          if (
            item.id === id &&
            item.selectedColor === color &&
            item.selectedSize === size
          ) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number, color: string, size: string) => {
    setCart(
      cart.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedColor === color &&
            item.selectedSize === size
          )
      )
    );
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="h-screen overflow-y-auto  bg-gray-50">
      {/* Header */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showCart={showCart}
        setShowCart={setShowCart}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        setShowMobileMenu={setShowMobileMenu}
        getTotalItems={getTotalItems}
      />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <FiltersSidebar
            showFilters={showFilters}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            brands={brands}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredShoes.length} Products
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredShoes.map((shoe) => (
                <ProductCard
                  key={shoe.id}
                  shoe={shoe}
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  setSelectedShoe={setSelectedShoe}
                />
              ))}
            </div>

            {filteredShoes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No shoes found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        getTotalPrice={getTotalPrice}
        removeFromCart={removeFromCart}
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        updateQuantity={updateQuantity}
      />

      {/* Product Modal */}
      {selectedShoe && (
        <ProductModal
          shoe={selectedShoe}
          onClose={() => setSelectedShoe(null)}
          addToCart={addToCart}
        />
      )}
      <Footer />
    </div>
  );
}
