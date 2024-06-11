import React from 'react'

function Imageses2() {
  return (
    <>
    <div className="flex">
        <div className="flex pt-16">
          <div className="h-56 w-60">
            <img
              src="https://static.javatpoint.com/definition/images/art-definition.png"
              alt=""
            />
          </div>
          <div className="pl-6">
            <h5 className="pb-3">Art</h5>
            <h2 className="text-3xl font-bold pb-3">
              Immerse in the Artistic Treasures of India
            </h2>
            <h5>Discover the serenity of India's Natural Landscapes</h5>
            <div className="flex pt-5">
              <img
                className="h-12 w-12 rounded-full "
                src="https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/aca92f241d8de80c/5eb650976244/v/04329fc78e5f/dr-robert-johnson.jpg"
                alt=""
              />
              <div className="pl-3">
                <h5>John Doe</h5>
                <h5>11 Jan 2022 . 5 min read</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-16">
          <div className="h-60 w-60">
            <img
              src="https://miro.medium.com/v2/resize:fit:564/1*A4s4vfQiXEtbRZd6Bt1ljA.jpeg"
              alt=""
            />
          </div>
          <div className="pl-6">
            <h5 className="pb-3">Culture</h5>
            <h2 className="text-3xl font-bold pb-3">
                Unravel the Rich History of India
            </h2>
            <h5>Learn about the Traditional Crafts of India</h5>
            <div className="flex pt-5">
              <img
                className="h-12 w-12 rounded-full "
                src="https://illuminelegal.com/wp-content/uploads/2024/01/Emily-Davis.webp"
                alt=""
              />
              <div className="pl-3">
                <h5>Emily Davis</h5>
                <h5>11 Jan 2022 . 5 min read</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Imageses2