import React from "react";
import { motion } from "framer-motion";
import { WhatPageTitle } from "./What.style";

const What = () => {
  return (
    <motion.div initial={{ x: "100vw" }} animate={{ x: 0 }}>
      <WhatPageTitle>What</WhatPageTitle>
    </motion.div>
  );
};

export default What;
