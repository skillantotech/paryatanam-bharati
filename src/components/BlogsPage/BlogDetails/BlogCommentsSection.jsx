import React from "react";

const BlogCommentsSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="w-fullbg-white rounded-lg mx-4 ">
        <h3 className="font-semibold text-3xl pb-5">Discussion</h3>
        <div className="flex flex-col gap-5 m-3">
        <div className="w-full px-3 mb-2 mt-6">
          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Comment"
            required
          ></textarea>
        </div>

        <div className="w-full flex justify-end px-3 my-3">
          <input
            type="submit"
            className="px-2.5 py-1.5 rounded-md text-white bg-indigo-500 text-lg"
            value="Post Comment"
          />
        </div>
          <div>
            <div className="flex w-full justify-between border rounded-md">
              <div className="p-3">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/22263436?v=4"
                    className="object-cover w-10 h-10 rounded-full border-2 border-blue-400  "
                  />
                  <h3 className="font-bold">
                    User 1
                    <br />
                    <span className="text-sm text-gray-400 font-normal">
                      Level 1
                    </span>
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">this is sample commnent</p>
                <button className="text-right text-blue-500">Reply</button>
              </div>

              <div className="flex flex-col items-end gap-3 pr-3 py-3"></div>
            </div>

            <div className="text-gray-300 font-bold pl-14">|</div>
            <div className="flex justify-between border ml-5 bg-slate-100 rounded-md">
              <div className="p-3">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/22263436?v=4"
                    className="object-cover w-10 h-10 rounded-full border-2 border-blue-400  "
                  />
                  <h3 className="font-bold">
                    User 2
                    <br />
                    <span className="text-sm text-gray-400 font-normal">
                      Level 1
                    </span>
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">this is sample commnent</p>
              </div>
            </div>

            <div className="text-gray-300 font-bold pl-14">|</div>
            <div className="flex justify-between border ml-5 bg-slate-100  rounded-md">
              <div className="p-3">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/22263436?v=4"
                    className="object-cover w-10 h-10 rounded-full border-2 border-blue-400  "
                  />
                  <h3 className="font-bold">
                    User 3
                    <br />
                    <span className="text-sm text-gray-400 font-normal">
                      Level 1
                    </span>
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">this is sample commnent</p>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between border rounded-md">
            <div className="p-3">
              <div className="flex gap-3 items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/22263436?v=4"
                  className="object-cover w-10 h-10 rounded-full border-2 border-blue-400  "
                />
                <h3 className="font-bold">
                  User 4
                  <br />
                  <span className="text-sm text-gray-400 font-normal">
                    Level 1
                  </span>
                </h3>
              </div>
              <p className="text-gray-600 mt-2">this is sample commnent</p>
              <button className="text-right text-blue-500">Reply</button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default BlogCommentsSection;
