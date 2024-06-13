"use client";

const HydrationTest = () => {
  const randomNumber = Math.random();
  console.log(randomNumber);
  
  return <div>{randomNumber}</div>;
};

export default HydrationTest;
