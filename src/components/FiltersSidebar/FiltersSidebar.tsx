import React from 'react';

interface FiltersSidebarProps {
  showFilters: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  brands: string[];
  priceRange: number[];
  setPriceRange: (range: [number, number]) => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  showFilters,
  selectedCategory,
  setSelectedCategory,
  categories,
  selectedBrand,
  setSelectedBrand,
  brands,
  priceRange,
  setPriceRange,
}) => {
  return (
    <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden'} md:h-[10rem]  mt-[4rem] lg:block`}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Category</h4>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Brand</h4>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Price Range</h4>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
