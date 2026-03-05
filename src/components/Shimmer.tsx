import { ReactElement } from 'react';

const ShimmerCard = () : ReactElement => (
  <div className="border w-72 rounded-xl h-[350px] shadow-md bg-gray-200 animate-pulse">
    <div className="rounded-t-xl h-3/5 bg-gray-300"></div>    
    <div className="p-4 flex flex-col gap-3 h-1/5 items-center">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      <div className="h-3 bg-gray-300 rounded w-2/3"></div>
    </div>
  </div>
);

const Shimmer = ({numCards= 9}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center my-16">
      {Array(numCards).fill("").map((_, index) => (
        <ShimmerCard key={index}/>
      ))}
    </div>
  );
};

export default Shimmer;