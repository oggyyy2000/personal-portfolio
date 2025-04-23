"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: loading ? "-100%" : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center 
    bg-gradient-to-t from-yellow-50 to-red-50 z-50"
    >
      <Image
        src="/spinner.gif"
        width={40}
        height={40}
        alt="spinner loading"
        unoptimized
      />
    </motion.div>
  );
};

export default Loading;
