"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="h-screen lg:h-auto py-20 lg:py-40 xs:pb-20 px-96">
      <Heading text="Get In Touch" />
      <div className="w-full h-full my-auto flex lg:flex-col justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="w-[400px] rounded-md opacity-90"
            src="/contact.gif"
            alt="contact"
            width={400}
            height={400}
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              className="w-full border border-yellow-500 rounded-md px-4 py-2 text-sm tracking-wider outline-none"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full border border-yellow-500 rounded-md px-4 py-2 text-sm tracking-wider outline-none"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <input
            className="w-full border border-yellow-500 rounded-md px-4 py-2 text-sm tracking-wider outline-none"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="min-h-[150px] max-h-[250px] border border-yellow-500 rounded-md px-4 py-2 text-sm tracking-wider outline-none"
            placeholder="Write Message..."
          ></textarea>
          <input
            className="w-full border border-yellow-500 bg-yellow-600 rounded-md text-white px-4 py-2 text-sm tracking-wider outline-none hover:bg-yellow-700 transition-colors cursor-pointer"
            type="submit"
            value="Send Message"
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
