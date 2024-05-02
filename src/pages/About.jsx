
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const About = () => {
  return (
    <section className="bg-[#111] h-screen w-full overflow-hidden flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50%" }}
        transition={transition1}
        className="container px-5 z-10 text-white flex items-center md:items-end flex-col"
      >
        <h1 className="font-alternative uppercase font-bold text-center md:text-right text-[60px]  lg:text-[80px] xl:text-[100px] xxl:text-[120px] leading-[60px] lg:leading-[80px] xl:leading-[100px] xxl:leading-[120px] max-w-[300px] md:max-w-full break-words">
          about me
        </h1>
        <p className="font-light text-[16px] md:text-[24px] mb-[36px] text-center md:text-right max-w-[344px] md:max-w-[644px]">
        I&apos;m Atharva Ghate the owner and lead photographer at Aperture Moments Studios, a photography studio in Pune specializing in commercial and professional photography. We focus on creating impactful images that enhance brands and personal images. Services include product photography, portraits, and event coverage, with a commitment to delivering exceptional results that bring client&apos;s visions to life.

        </p>
        <Link
          to={"/portfolio"}
          className="text-[16px] font-light uppercase border-[1px] border-white py-2 px-[36px] hover:text-[#111]
      duration-300 relative before:absolute before:top-0 before:left-0 before:bg-white before:w-0 before:h-full before:-z-10 hover:before:w-full before:duration-300"
        >
          check my work
        </Link>
      </motion.div>
      <div className="fixed top-0 w-full z-0 flex">
        <motion.div
          initial={{ scale: 1, x: "-100%" }}
          animate={{ scale: 1, x: 0 }}
          exit={{ scale: 0, x: 0 }}
          transition={transition1}
          className="w-full md:w-6/12 h-full bg-black"
        >
          <img
            className="max-w-full w-full h-screen object-cover object-center saturate-0 opacity-50"
            src="https://i.postimg.cc/hjJDNFGW/Whats-App-Image-2024-04-28-at-18-40-51-4ef9a719.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
