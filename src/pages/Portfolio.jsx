
import { Link } from "react-router-dom";


import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Portfolio = () => {
  return (
    <section className="bg-[#111] h-screen w-full overflow-hidden flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50%" }}
        transition={transition1}
        className="container px-5 z-10 text-white flex items-center md:items-start flex-col"
      >
        <h1 className="font-alternative uppercase font-bold text-center md:text-left text-[60px] lg:text-[80px] xl:text-[100px] xxl:text-[120px] leading-[60px] lg:leading-[80px] xl:leading-[100px] xxl:leading-[120px] max-w-[300px] md:max-w-full break-words">
          my work
        </h1>
        <p className="font-light text-[16px] md:text-[20px] mb-[36px] text-center md:text-left ">
          A little bit from what I’ve been doing in the last couple months
        </p>
        <Link
          to={"/contact"}
          className="text-[16px] font-light uppercase border-[1px] border-white py-2 px-[36px] hover:text-[#111]
  duration-300 relative before:absolute before:top-0 before:left-0 before:bg-white before:w-0 before:h-full before:-z-10 hover:before:w-full before:duration-300"
        >
          hire me
        </Link>
      </motion.div>
      <div className="fixed top-0 w-full h-full z-0 flex justify-end">
        <div className="w-full md:w-6/12 grid grid-cols-2 gap-2">
          <motion.div
            initial={{ scale: 1, y: "-100%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 0 }}
            transition={{
              ...transition1,
              delay: 0,
            }}
            className="overflow-hidden bg-black"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7, ease: "backInOut" }}
              className="object-cover object-center w-full h-full saturate-0  opacity-50"
              src="https://i.postimg.cc/xT3TBV2h/Snapinsta-app-435273020-960084545702332-174894897867778492-n-1080.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1, y: "-100%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 0 }}
            transition={{
              ...transition1,
              delay: 0.2,
            }}
            className="overflow-hidden bg-black"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7, ease: "backInOut" }}
              className="object-cover object-center w-full h-full saturate-0  opacity-50"
              src="https://i.postimg.cc/J0fjzzhk/Snapinsta-app-400470292-355577800168897-6574184355037822938-n-1080.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1, y: "100%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 0 }}
            transition={{
              ...transition1,
              delay: 0.1,
            }}
            className="overflow-hidden bg-black"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7, ease: "backInOut" }}
              className="object-cover object-center w-full h-full saturate-0  opacity-50"
              src="https://i.postimg.cc/P5ZxKvqb/Snapinsta-app-440845453-1927988067721533-7669439177233920341-n-1080.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1, y: "100%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 0 }}
            transition={{
              ...transition1,
              delay: 0.3,
            }}
            className="overflow-hidden bg-black"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7, ease: "backInOut" }}
              className="object-cover object-center w-full h-full saturate-0  opacity-50"
              src="https://i.postimg.cc/pL40MTKL/Snapinsta-app-434399519-1112619426725563-6546354130859345610-n-1080.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
