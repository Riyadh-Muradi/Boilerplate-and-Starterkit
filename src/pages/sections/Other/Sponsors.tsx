"use client";
import CompanyLogos from "@/components/CompanyLogos";
import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <>
      <motion.div
        initial={{ y: "40px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl flex-wrap justify-center px-4 py-8 lg:py-12"
      >
        <CompanyLogos />
      </motion.div>
    </>
  );
};

export default Sponsors;
