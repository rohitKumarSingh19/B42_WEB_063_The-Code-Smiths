import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="ml-72 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
      <p className="text-gray-600">Welcome to your seller dashboard!</p>
    </motion.div>
  );
}
