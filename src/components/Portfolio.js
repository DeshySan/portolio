import React, { useEffect, useState } from "react";
import Info from "./Info";
import MainPage from "./MainPage";
import Loading from "../helpers/Loading";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {!loading ? (
        <div className='flex h-screen lg:px-22 xl:px-22 2xl:px-48 overflow-hidden'>
          <div className='w-[35%] mt-12 sticky top-0'>
            <Info />
          </div>
          <div className='mt-12 ml-28 w-[65%] overflow-scroll '>
            <MainPage />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Portfolio;
