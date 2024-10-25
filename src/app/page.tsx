import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Cards from "@/components/Cards";
import FeaturedCards from "@/components/FeaturedCards";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" w-full bg-[#CFA6A61C] ">
        <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl m-auto px-4 p-5 capitalize  ">
          <div className=" flex justify-center sm:justify-items-center md:justify-center  lg:justify-between pb-10 mt-20  ">
            <div>
              <h2 className=" font-bold mb-3  text-5xl md:text-4xl sm:text-3xl ">Hi, I am John,</h2>
              <h2 className="font-bold mb-3 text-5xl ">
                creative technologist
              </h2>
              <p className=" font-semibold  text-md mt-10 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className=" font-semibold  text-md ">
                Dolorum fugiat aspernatur, esse porro maxime quis
              </p>
              <p className=" font-semibold  text-md ">
                Lorem ipsum dolor sit amet.
              </p>
              <button className="mt-10 bg-red-400 p-4 text-white font-bold rounded-sm shadow-gray-500 shadow-md ">
                Download Resume
              </button>
            </div>
            <div className=" hidden sm:hidden md:hidden lg:block ">
              <Image
                src={"/hero-image.png"}
                className=" rounded-[50%] "
                height={320}
                width={320}
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-red-100 ">
        <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl m-auto px-4 ">
          <div className="flex justify-between  pt-5 text-md capitalize font-bold ">
            <h3>recent post</h3>
            <button className=" text-red-400 capitalize font-bold ">
              view all
            </button>
          </div>
          <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row  gap-10 mt-5 capitalize pb-10 ">
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-red-50 ">
        <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl m-auto px-4 pt-10 capitalize ">
          <h2 className=" text-md font-bold "> featured works </h2>
          <FeaturedCards imagePath="/Rectangle 30.png" />
          <FeaturedCards imagePath="/Rectangle 32.png" />
          <FeaturedCards imagePath="/Rectangle 34.png" />
        </div>
        <div className="flex justify-center mt-32  items-center w-full gap-10 ">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-2xl text-gray-600 hover:text-blue-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-2xl text-gray-600 hover:text-pink-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-2xl text-gray-600 hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="text-2xl text-gray-600 hover:text-blue-700" />
          </a>
        </div>
        <div className=' mt-5 capitalize font-bold text-lg w-full text-center pb-10' >
          <p>Copyright 2020 All right reserved</p>
        </div>
      </div>
    </>
  );
}
