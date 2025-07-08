import {  Truck, Shield, RotateCcw } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-black to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Step Into Style</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Discover the perfect pair for every adventure</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center">
              <Truck className="w-5 h-5 mr-2" />
              Free Shipping Over $100
            </div>
            <div className="flex items-center">
              <RotateCcw className="w-5 h-5 mr-2" />
              30-Day Returns
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              2-Year Warranty
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero