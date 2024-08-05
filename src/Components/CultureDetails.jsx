// import React from 'react'
import bharatanatyam from "./../assets/Images/CulturalDetails/Traditional Dance/Bharatanatyam.webp";
import kathak from "./../assets/Images/CulturalDetails/Traditional Dance/Kathak.webp";
import kathakali from "./../assets/Images/CulturalDetails/Traditional Dance/Kathakali.webp";
import kuchipudi from "./../assets/Images/CulturalDetails/Traditional Dance/Kuchipudi.webp";
import manipuri from "./../assets/Images/CulturalDetails/Traditional Dance/Manipuri.webp";
import mohiniyattam from "./../assets/Images/CulturalDetails/Traditional Dance/Mohiniyattam.webp";
import odissi from "./../assets/Images/CulturalDetails/Traditional Dance/Odissi.webp";
import sattriya from "./../assets/Images/CulturalDetails/Traditional Dance/Sattriya.webp";

const CultureDetails = () => {
  return (
    <section className = "max-w-7xl mx-auto px-4 flex lg:flex-row flex-col gap-10 my-20 overflow-hidden">
      <div className="max-w-full">
        <h2 className="font-bold lg:text-4xl text-3xl">Odissi</h2>
        <div className="bg-blue-600 text-white py-0.5 px-0.5 rounded-lg text-center max-w-12 text-xs mt-2">Dance</div>
        <div className="overView">
          <div className="my-10 bg-slate-400 w-full flex justify-center rounded-lg overflow-hidden ">
            <img className="aspect-[19/10] w-full object-cover" src={odissi}/> 
          </div>
          <div className="flex flex-col gap-3">
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet, nesciunt vitae libero, eveniet  numquam perspiciatis ipsam impedit nam debitis odit labore ipsum similique velit? Eos animi voluptates aliquam delectus!</p>
            <p>Tenetur voluptatum reiciendis inventore esse sequi at corporis iusto? Rerum neque ipsa voluptates iure, consequatur incidunt atque perferendis molestiae sed nobis omnis perspiciatis, quae non expedita obcaecati tempora molestias repellat.</p>
          </div>
          <div className="imageContainer grid grid-cols-2 md:grid-cols-2 gap-4 my-10 md:h-[600px]">
            <div className=" row-span-2 col-span-2 md:col-span-1 relative overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" src={odissi}/>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" src={odissi}/>
            </div>

            <div className="relative overflow-hidden rounded-lg md:col-auto">
              <img className="w-full h-full object-cover" src={odissi}/>
            </div>
          </div>
          </div>
          <div className="secondParagraph">
            <h3 className="font-medium text-3xl mt-10 mb-5">Significance</h3>
            <div className="flex flex-col gap-3">
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet, nesciunt vitae libero, eveniet  numquam perspiciatis ipsam impedit nam debitis odit labore ipsum similique velit? Eos animi voluptates aliquam delectus!
              </p>
              <p>Tenetur voluptatum reiciendis inventore esse sequi at corporis iusto? Rerum neque ipsa voluptates iure, consequatur incidunt atque perferendis molestiae sed nobis omnis perspiciatis, quae non expedita obcaecati tempora molestias repellat.</p>
              </div>
            </div> 
            </div>  
      <div className="lg:min-w-96 max-w-full overflow-hidden">
        <h3 className="mt-7 font-medium text-3xl flex justify-center">Categories</h3>
        <div className="my-11 flex flex-col items-center gap-7 overflow-hidden">
          <div className="relative group rounded-lg overflow-hidden max-w-80 h-28 ease-in-out duration-1000">
            <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-50 absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">Bharatanatyam</div>
            <img className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000" src={bharatanatyam}/>
          </div>
          <div className="relative group rounded-lg overflow-hidden max-w-80 h-28 ease-in-out duration-1000">
            <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-50 absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">Kathak</div>
            <img className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000" src={kathak}/>
          </div>
          <div className="relative group rounded-lg overflow-hidden max-w-80 h-28 ease-in-out duration-1000">
            <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-50 absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">Mohiniyattam</div>
            <img className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000" src={mohiniyattam}/>
          </div>
          <div className="relative group rounded-lg overflow-hidden max-w-80 h-28 ease-in-out duration-1000">
            <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-50 absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">Kuchipudi</div>
            <img className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000" src={kuchipudi}/>
          </div>
          <div className="relative group rounded-lg overflow-hidden max-w-80 h-28 ease-in-out duration-1000">
            <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-50 absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">Manipuri</div>
            <img className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000" src={manipuri}/>
          </div>
          <div className="relative group rounded-lg overflow-hidden max-w-80 h-28 ease-in-out duration-1000">
            <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-50 absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">Sattriya</div>
            <img className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000" src={sattriya}/>
          </div>
          <div className="relative group rounded-lg overflow-hidden max-w-80 h-28 ease-in-out duration-1000">
            <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-50 absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">Kathakali</div>
            <img className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000" src={kathakali}/>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default CultureDetails