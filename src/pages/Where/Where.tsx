import React from "react";
import { motion } from "framer-motion";
import { WherePageTitle } from "./Where.style";

const Where = () => {
  return (
    <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }}>
      <WherePageTitle>Where</WherePageTitle>
    </motion.div>
  );
};

export default Where;
