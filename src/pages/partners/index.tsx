import React from "react";
import { motion } from "framer-motion";
import P1 from "@/assets/partners/Abb.jpg";
import P2 from "@/assets/partners/Cembre.jpg";
import P3 from "@/assets/partners/Danfoss.jpg";
import P4 from "@/assets/partners/Endress Hauser.jpg";
import P5 from "@/assets/partners/Phoenix Contact.jpg";
import P6 from "@/assets/partners/Schneider.jpg";
import P7 from "@/assets/partners/Seko.jpg";
import P8 from "@/assets/partners/Siemens.jpg";
import P9 from "@/assets/partners/Standart Pompa.jpg";
import P10 from "@/assets/partners/Wieland.jpg";
import P11 from "@/assets/partners/Wilo.jpg";

// Example array of partner image URLs
const partnerImages = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11];

const Partners: React.FC = () => {
  return (
    <section className="bg-white w-5/6 mx-auto justify-center items-center py-16 md:py-32">
      <motion.h1
        className="text-sky-900 text-4xl font-bold font-manrope leading-normal text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Partners
      </motion.h1>
     
      <motion.div
        className="py-4 grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 dark:text-gray-400"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
              duration: 0.5,
            },
          },
        }}
      >
        {partnerImages.map((image, index) => (
          <motion.a
            key={index}
            className="flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={image}
              alt={`Partner ${index + 1}`}
              className="max-w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Partners;
