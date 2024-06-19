const BlogSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h5 className="pb-3">Travel Insights</h5>
      <h2 className="text-3xl font-bold pb-4">Discover the wonders of India through our blog posts</h2>
          <h5>Explore captivating stories and tips from around the world</h5>
      <div className="flex flex-col md:flex-row">
        <div className="flex pt-16">
          <div className="h-56 w-60">
            <img
              className="h-full w-full object-cover"
              src="https://static.saltinourhair.com/wp-content/uploads/2019/03/23140725/best-travel-quotes-philippines.jpg"
              alt=""
            />
          </div>
          <div className="pl-6">
            <h5 className="pb-3">Travel</h5>
            <h2 className="text-3xl font-bold pb-3">
              Unveiling the Hidden Gems of India
            </h2>
            <h5>Read More About Cultural Heritage of India</h5>
            <div className="flex pt-5">
              <img
                className="h-12 w-12 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg"
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
              className="h-full w-full object-cover"
              src="https://sundayguardianlive.com/wp-content/uploads/2022/12/Indian-Cuisine-Fifth-Best-In-The-World.jpg"
              alt=""
            />
          </div>
          <div className="pl-6">
            <h5 className="pb-3">Cuisine</h5>
            <h2 className="text-3xl font-bold pb-3">
              Indulge in the Flavors of India
            </h2>
            <h5>Experience the Vibrant Festivals of India</h5>
            <div className="flex pt-5">
              <img
                className="h-12 w-12 rounded-full "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWt_YzxGnmYxvm9-9fyfSiUv6j5-X5NpF_Fg&s"
                alt=""
              />
              <div className="pl-3">
                <h5>Jane Smith</h5>
                <h5>11 Jan 2022 . 5 min read</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex pt-16">
          <div className="h-56 w-60">
            <img
              className="h-full w-full object-cover"
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
              className="h-full w-full object-cover"
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
    </div>
  );
};

export default BlogSection;
