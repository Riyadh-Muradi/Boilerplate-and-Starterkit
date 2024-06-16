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
        className="flex flex-col items-center gap-y-4 p-8"
      >
        <CompanyLogos />
      </motion.div>
    </>
  );
};

export default Sponsors;
