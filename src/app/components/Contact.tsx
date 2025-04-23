"use client";
import Heading from "@/components/sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/send-email", formData);
      alert("Message sent successfully!");
    } catch (error) {
      alert(`Failed to send message: ${error}`);
    }
  };

  return (
    <div
      id="contact"
      className="h-screen lg:h-auto py-20 lg:py-40 xs:pb-20"
    >
      <Heading text="Get In Touch" />
      <div
        className="w-full h-[calc(100%-10rem)] my-auto flex lg:flex-col justify-between items-center 
        lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20"
      >
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
            unoptimized
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              className="w-full border border-yellow-500 rounded-md px-4 py-2 text-sm 
              tracking-wider outline-none"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="w-full border border-yellow-500 rounded-md px-4 py-2 text-sm 
              tracking-wider outline-none"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <input
            className="w-full border border-yellow-500 rounded-md px-4 py-2 text-sm tracking-wider outline-none"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            className="min-h-[150px] max-h-[250px] border border-yellow-500 rounded-md px-4 py-2 text-sm tracking-wider outline-none"
            name="message"
            placeholder="Write Message..."
            value={formData.message}
            onChange={handleChange}
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
