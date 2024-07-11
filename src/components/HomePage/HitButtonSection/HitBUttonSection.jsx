function Adventure() {
  return (
    <div className=" max-w-7xl mx-4 xl:mx-auto mt-20">
      <div className="flex flex-wrap justify-between gap-4 border-2 border-black p-10">
        <div className="flex flex-col gap-2 ">
          <h2 className="font-bold text-3xl">
            Discover your next adventure here
          </h2>
          <p>Explore the beauty of India with Paryatanam Bharti</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="border-2 h-12 px-4 border-black">Book</button>
          <button className="px-4 h-12 bg-black text-white">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Adventure;
