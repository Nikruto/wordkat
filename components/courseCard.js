import Link from "next/link";
import { PlayIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
export default ({ item }) => {
  return (
    <div className="w-full flex bg-white px-6 py-6 font-poppins text-black rounded-md shadow-md">
      <div className="w-16 h-16 bg-gradient-to-b from-[#B5FF92] to-[#A0FFB5]"></div>
      <div className="flex flex-col justify-between ml-5">
        <h1 className="text-xl font-semibold">
          <motion.span key={item.title} layoutId={`header_${item.title}`}>
            {item.title}
          </motion.span>
        </h1>
        <div className="flex items-center">
          <PlayIcon className="w-4 h-4" />
          <p className="ml-1 text-xs font-semibold">{`${item.content.length} Words`}</p>
        </div>
      </div>
      <div className="ml-auto">
        <Link href={`app/${item.slug}`}>
          <div className="bg-black border border-black hover:bg-transparent hover:text-black text-white text-sm font-semibold px-5 py-2 rounded cursor-pointer transition">
            Start Now
          </div>
        </Link>
      </div>
    </div>
  );
};
