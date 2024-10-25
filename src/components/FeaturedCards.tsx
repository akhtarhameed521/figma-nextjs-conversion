import Image from "next/image";
import React from "react";

interface imagePath {
    imagePath: string
}

export default function FeaturedCards({imagePath} : imagePath )  {
  return (
    <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row gap-5 mt-10  ">
      <div className=" w-[250px]  h-[150px]   relative text-center " >
        <Image
          src={imagePath}
          objectFit="cover"
          layout="fill"
          className="rounded-md"
          alt="dashboard page"
        />
      </div>
      <div>
        <h3 className=" text-2xl font-bold ">designing dashboard</h3>
        <div className="flex items-center gap-10 mt-2 ">
          <span className="bg-red-400 p-1 px-5 text-white rounded-2xl  ">
            2020
          </span>
          <span>dashboard</span>
        </div>
        <p className="mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
          commodi necessitatibus! Vitae odit enim facilis provident, ipsa et
          laudantium cumque nemo quae autem, quibusdam nam recusandae
          consectetur{" "}
        </p>
      </div>
    </div>
  );
}
