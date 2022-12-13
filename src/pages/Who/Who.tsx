import React from "react";
import { motion } from "framer-motion";
import { WhoPageTitle } from "./What.style";

const Who = () => {
  return (
    <motion.div initial={{ y: "100vw" }} animate={{ y: 0 }}>
      <WhoPageTitle>Who</WhoPageTitle>
    </motion.div>
  );
};

export default Who;
