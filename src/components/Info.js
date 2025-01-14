import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Info = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  return (
    <div className='p-4 flex flex-col justify-between '>
      <div className='myInfo text-left lg:mb-20 mb-16 md:mb-36 sm:mb-22 2xl:mb-8 2xl:mb-36'>
        <h1
          ref={ref}
          className={`text-5xl py-2  animated-element ${
            inView ? "visible" : ""
          }`}>
          Sandesh Neupane
        </h1>
        <h2
          ref={ref}
          className={`text-3xl check font-bold py-2 ${
            inView ? "visible" : ""
          }`}>
          Full Stack Developer
        </h2>
        <p className='text-lg py-2'>
          An independent full-stack developer specialising in React, Node.js,
          Express.js, Mongo DB, SQL, php-laravel.
        </p>
      </div>
      <div className='flex flex-col text-left '>
        <Link>--------- ABOUT</Link>
        <Link>--------- EXPERIENCE</Link>
        <Link>--------- PROJECTS</Link>
      </div>
      <ul className='flex items-center  gap-6 mt-12 xl:mt-80'>
        <li>
          <a href='https://www.facebook.com/'>
            <i class='fa-brands fa-facebook'></i>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/'>
            <i class='fa-brands fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/'>
            <i class='fa-brands fa-instagram'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
