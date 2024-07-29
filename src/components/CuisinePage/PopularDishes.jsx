import React, { useEffect, useState } from "react";

const PopularDishes = ({ data }) => {

  return (
    <div className=" my-5">
      {/* <h1 className="text-lg md:text-lg lg:text-2xl font-bold text-white mb-8">Bento Grid Layout with Images</h1> */}
      <div className="text-3xl my-5">Popular Dishes all over India</div>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded shadow-lg group ">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Nature"
            className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-1000 "
          />
          <div
            className={`absolute inset-0 bg-black/30 group-hover:bg-black/60 ease-linear bg-opacity-60 
           opacity-100 transition-all duration-300`}
          >
            <div className="absolute -bottom-1 left-0 right-0 p-2 lg:p-4">
              <h3 className="text-lg md:text-lg lg:text-2xl font-bold text-white">
                {data.dishItems[0].dishName}
              </h3>
              {/* <p className="text-white hidden md:block">
                Discover the beauty of the natural world
              </p> */}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Food"
            className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-1000"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 ease-linear bg-opacity-60 
           opacity-100 transition-all duration-300">
            <div className="absolute -bottom-1 left-0 right-0 p-2 lg:p-4">
              <h4 className="text-lg md:text-lg lg:text-2xl font-bold text-white">
                {data.dishItems[1].dishName}
              </h4>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded shadow-lg group col-span-2 md:col-auto">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Technology"
            className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-1000"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 ease-linear bg-opacity-60 
           opacity-100 transition-all duration-300">
            <div className="absolute -bottom-1 left-0 right-0 p-2 lg:p-4">
              <h4 className="text-lg md:text-lg lg:text-2xl font-bold text-white">
                {data.dishItems[2].dishName}
              </h4>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Travel"
            className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-1000"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 ease-linear bg-opacity-60 
           opacity-100 transition-all duration-300">
            <div className="absolute -bottom-1 left-0 right-0 p-2 lg:p-4">
              <h4 className="text-lg md:text-lg lg:text-2xl font-bold text-white">
                {data.dishItems[3].dishName}
              </h4>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded shadow-lg group md:row-span-2">
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Art"
            className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-1000"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 ease-linear bg-opacity-60 
           opacity-100 transition-all duration-300">
            <div className="absolute -bottom-1 left-0 right-0 p-2 lg:p-4">
              <h4 className="text-lg md:text-lg lg:text-2xl font-bold text-white">
                {data.dishItems[4].dishName}
              </h4>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Food"
            className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-1000"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 ease-linear bg-opacity-60 
           opacity-100 transition-all duration-300">
            <div className="absolute -bottom-1 left-0 right-0 p-2 lg:p-4">
              <h4 className="text-lg md:text-lg lg:text-2xl font-bold text-white">
                {data.dishItems[5].dishName}
              </h4>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded shadow-lg group row-span-2 md:row-auto ">
          <img
            src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Sport"
            className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-1000"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 ease-linear bg-opacity-60 
           opacity-100 transition-all duration-300">
            <div className="absolute -bottom-1 left-0 right-0 p-2 lg:p-4">
              <h4 className="text-lg md:text-lg lg:text-2xl font-bold text-white">
                {data.dishItems[0].dishName}
              </h4>
            </div>
          </div>
        </div>
        {/* <div className="relative overflow-hidden rounded shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Sport"
            className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-1000"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 ease-linear bg-opacity-60 
           opacity-100 transition-all duration-300">
            <div className="absolute -bottom-1 left-0 right-0 p-2 lg:p-4">
              <h4 className="text-lg md:text-lg lg:text-2xl font-bold text-white">Football</h4>
            </div>
          </div>
        </div> */}
        <div className="relative overflow-hidden rounded shadow-lg group ">
          <img
            src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Sport"
            className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-1000"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 ease-linear bg-opacity-60 
           opacity-100 transition-all duration-300">
            <div className="absolute -bottom-1 left-0 right-0 p-2 lg:p-4">
              <h4 className="text-lg md:text-lg lg:text-2xl font-bold text-white">
                {data.dishItems[1].dishName}
              </h4>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center overflow-hidden rounded group col-span-2 md:col-auto">
                <img src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sport" className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-1000"/>
                    <button type='button' className='bg-blue-500 p-4 rounded'>Explore</button>
            </div> */}
      </div>
    </div>
  );
};

export default PopularDishes;
