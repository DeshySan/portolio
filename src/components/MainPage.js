import React from "react";
import { useInView } from "react-intersection-observer";
import homepage from "../assets/homepage.png";
const MainPage = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: ref1, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <div className='p-4 overflow-y-auto overflow-x-hidden'>
      <div>
        <p className='text-left text-lg'>
          I'm an independent developer passionate about crafting innovative
          application for the Hospitality industry with such a beautiful and
          thoughjtful design and robust enginerring.. My favorite work lies at
          the intersection of design and development, creating experiences that
          not only look great but are meticulously built for performance and
          usability.
          <br className='mt-2' />
          <br />
          Currenlty, I'm working as a Software Support consultant at SwiftPOS
          Global Pty Ltd, specialising in Level 3 Support. I contribute to the
          support of the end users who are big hospitality partners of Oolio
          Group.
          <br />
          <br />
          In the past, I've had opporutnity to develop mobile application and
          web applciation across a variety of industry - from therapist to
          advertising agencies.
          <br />
          <br />
          Currently, I am working tio develop a fully functional ecommerce
          integration that connects easily with the SwiftPOS Admin API. The main
          idea of this project is to assist the venue who also has bottle shop
          who can utilise this ecommerce platform to boost their sales
        </p>
      </div>
      <div
        ref={ref1}
        className={` relative right-to-left ${
          inView2 ? "visible" : ""
        } flex mt-2 hover:bg-gray-200/40 hover:cursor-pointer  hover:backdrop-blur-lg rounded-xl hover:border border-white/20 shadow-lg p-6 transition-all duration-300 ease-in-out`}>
        <div className='date w-[30%]'>
          <p>2023-Present</p>
        </div>
        <div className='w-[70%]'>
          <h2 className='font-bold text-left'>Software Support Consultant</h2>
          <p className='text-left font-bolder'>Oolio Group</p>
          <p className='text-left text-sm'>
            Provide comprehensive software support, including troubleshooting,
            issue resolution, and system maintenance for SwiftPOS solutions.
            Collaborate with clients to address technical inquiries, ensure
            system stability, and optimize software performance. Proficient in
            diagnosing and resolving complex issues while delivering exceptional
            customer service and maintaining client satisfaction.
          </p>
          <div>
            <small className='ml-2 text-accent bg-neutral p-1 rounded-sm'>
              SQL
            </small>
            <small className='ml-2 text-accent bg-neutral p-1 rounded-sm'>
              POSTMAN
            </small>
            <small className='ml-2 text-accent bg-neutral p-1 rounded-sm'>
              Selenium
            </small>
            <small className='ml-2 text-accent bg-neutral p-1 rounded-sm'>
              SwiftPOS Technology
            </small>
            <small className='ml-2 text-accent bg-neutral p-1 rounded-sm'>
              Adyen Integration
            </small>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={` relative left-to-right ${
          inView ? "visible" : ""
        } flex mt-2 hover:bg-gray-200/40 hover:cursor-pointer  hover:backdrop-blur-lg rounded-xl hover:border border-white/20 shadow-lg p-6 transition-all duration-300 ease-in-out`}>
        <div className='date w-[30%]'>
          <p>2022-2023</p>
        </div>
        <div className='w-[70%]'>
          <h2 className='font-bold text-left'>Junior Web Developer</h2>
          <p className='text-left font-bolder'>Osky</p>
          <p className='text-left text-sm'>
            Collaborated with teams to design, develop, and maintain web
            applications. Focused on front-end and back-end development using
            modern frameworks and technologies such as HTML, CSS, JavaScript,
            React, and Node.js. Gained experience in debugging, implementing
            responsive designs, and optimizing performance. Played a key role in
            delivering user-friendly and functional web solutions within
            deadlines.
          </p>
          <div>
            <small className='ml-2 text-accent bg-neutral p-1 rounded-sm'>
              TypeScript
            </small>
            <small className='ml-2 text-accent bg-neutral p-1 rounded-sm'>
              Laravel
            </small>
            <small className='ml-2 text-accent bg-neutral p-1 rounded-sm'>
              MySql
            </small>
            <small className='ml-2 text-accent bg-neutral p-1 rounded-sm'>
              Wordpress
            </small>
          </div>
        </div>
      </div>
      <div>
        <div
          ref={ref3}
          className={` relative right-to-left ${
            inView3 ? "visible" : ""
          } flex mt-36 hover:bg-gray-200/40 hover:cursor-pointer  hover:backdrop-blur-lg rounded-xl hover:border border-white/20 shadow-lg p-6 transition-all duration-200 ease-in-out`}>
          <img src={homepage} alt='' className='w-32 h-32' />
          <div>
            <h2>Daddy's ecommerce via Swift API</h2>
            <p className='text-left ml-8'>
              Designed and developed a fully functional e-commerce website to
              enhance online sales and user experience. Implemented features
              such as product listings, shopping cart, secure checkout, and
              payment gateway integration. Optimized the site for responsive
              design and ensured compatibility across devices and browsers.
              Utilized modern web development technologies and frameworks
            </p>
          </div>
        </div>
        <div
          ref={ref4}
          className={` relative left-to-right ${
            inView4 ? "visible" : ""
          } flex mt-36 hover:bg-gray-200/40 hover:cursor-pointer  hover:backdrop-blur-lg rounded-xl hover:border border-white/20 shadow-lg p-6 transition-all duration-200 ease-in-out`}>
          <img src={homepage} alt='' className='w-32 h-32' />
          <div>
            <h2>WEB Scrapper</h2>
            <p className='text-left ml-8'>
              This is a web application designed to compare Grocery Prices from
              many other website such as coles, woolies , aldiu and superbarn
              and give the best available price to the user. Motto is: Together
              We Fight Inflation!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
