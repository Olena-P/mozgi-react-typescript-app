import React from "react";
import { motion } from "framer-motion";
import { HomePageTitle } from "./Home.style";

const Home = () => {
  return (
    <motion.div initial={{ y: "-100vw" }} animate={{ y: 0 }}>
      <HomePageTitle>
        FULL-CYCLE <br /> EVENT AGENCY
      </HomePageTitle>
    </motion.div>
  );
};

export default Home;
