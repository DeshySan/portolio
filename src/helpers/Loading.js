import React from "react";

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='relative flex items-center justify-center h-16 w-16'>
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className='absolute h-2 w-2 bg-light rounded-full'
            style={{
              animation: `circle-spin 1.2s linear infinite`,
              animationDelay: `${index * 0.15}s`,
              transformOrigin: "center",
              transform: `rotate(${index * 45}deg) translate(6rem, 0)`,
            }}></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
