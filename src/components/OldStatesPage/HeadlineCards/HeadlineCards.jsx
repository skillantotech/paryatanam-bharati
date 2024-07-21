const HeadlineCards = () => {
  return (
    <div className="max-w-[1100px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 mt-[-100px]">
      {/* card */}
      <div className="relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 text-white flex flex-col justify-center items-start transition-all duration-500 ease-in-out transform hover:bg-black/70 hover:scale-105 hover:opacity-90">
          <p className="font-bold text-2xl px-4 pt-6">Heritage</p>
          <p className="px-4">
            Witness the Unprecedented Architectural Grandeur
          </p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover border-4 border-white shadow-2xl"
          src="https://images.unsplash.com/photo-1519955045385-7cdb8e07c76f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* card */}
      <div className="relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 text-white flex flex-col justify-center items-start transition-all duration-500 ease-in-out transform hover:bg-black/70 hover:scale-105 hover:opacity-90">
          <p className="font-bold text-2xl px-4 pt-6">Wildlife</p>
          <p className="px-4">
            Marvel at the Unique Ecosystem and Diverse Wildlife
          </p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1545063914-a1a6ec821c88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* card */}
      <div className="relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 text-white flex flex-col justify-center items-start transition-all duration-500 ease-in-out transform hover:bg-black/70 hover:scale-105 hover:opacity-90">
          <p className="font-bold text-2xl px-4 pt-6">Festivals</p>
          <p className="px-4">Experience the Unforgettable Festivals</p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1699854227507-4b9ff940652a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
