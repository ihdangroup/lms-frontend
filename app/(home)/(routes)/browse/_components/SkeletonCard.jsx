import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-[45%] lg:w-[24%] animate-pulse mx-1">
      <div className="h-[120px] w-full bg-gray-200"></div>
      <div className="p-4">
        <div className="w-full h-[20px] my-2 bg-gray-200"></div>
        <div className="w-1/2 h-[20px] my-2 bg-gray-200"></div>
        <div className="w-1/4 h-[25px] bg-gray-200"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
