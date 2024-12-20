import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  path: string; // Add path to product for dynamic routing
}

const ProductGrid = ({ products }: { products: Product[] }) => {
  const gridVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };
  return (
    <motion.section
      id="Products"
      className="w-fit mx-auto flex flex-wrap items-center justify-center  gap-y-20 gap-x-14 mt-10 mb-5 "
     
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={gridVariants}
      
    >
      {products.map((product) => (
        <Link
          key={product.id}
          to={product.path} // Dynamic link based on product path
          className="  w-72 h-96 bg-white shadow-md rounded-full duration-500 hover:scale-105 hover:shadow-xl border-2 cursor-pointer flex flex-col items-center box-border hover:border-2 hover:border-sky-400"
          style={{
            animation: 'borderCycle 2s infinite', // Add animation
          }}
        >
          {/* Image Section */}
          <div className="w-36 h-36 p-2 mt-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="px-4 py-3 flex-1 flex flex-col items-center text-center">
            <span className="text-gray-400 uppercase text-xs mb-2"></span>
            <p className="text-lg font-bold text-black capitalize truncate">
              {product.name}
            </p>
            <p className="text-sm text-gray-600 line-clamp-3 mt-2">
              {product.description}
            </p>
          </div>
        </Link>
      ))}
    </motion.section>
  );
};

export default ProductGrid;
