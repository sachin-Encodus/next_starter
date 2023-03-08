import React from "react";

const SubscriptionCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex justify-items-center gap-4 p-2 pt-24">
        <div  className="flex flex-col items-center justify-between lg:flex-row lg:items-start gap-20">
         {/* Card first */}
          <div className="order-2 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-1 lg:w-full">
            <div className="mb-7 flex items-center border-b border-gray-300 pb-7">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                alt=""
                className="h-20 w-20 rounded-3xl"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">Basic</span>
                <span>
                  <span className="align-top text-xl font-medium text-gray-500">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">10 </span>
                </span>
                <span className="font-medium text-gray-500">/ user</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
             
              <li className="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Get started with <span className="text-black">messaging</span>
                </span>
              </li>
              <li className="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Flexible <span className="text-black">team meetings</span>
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  <span className="text-black">5 TB</span> cloud storage
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex items-center justify-center rounded-xl bg-indigo-600 py-2 px-2 text-center text-xl text-white"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
              />
            </a>
          </div>
          {/* Card second */}
          <div className="order-1 w-full flex-1 rounded-3xl bg-gray-900 p-8 text-gray-400 shadow-xl sm:w-96 lg:order-2 lg:mt-0 lg:w-full">
            <div className="mb-8 flex items-center border-b border-gray-600 pb-8">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                alt=""
                className="h-20 w-20 rounded-3xl"
              />
              <div className="ml-5">
                <span className="block text-3xl font-semibold text-white">
                  Startup
                </span>
                <span>
                  <span className="align-top text-xl font-medium">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold text-white">24 </span>
                </span>
                <span className="font-medium">/ user</span>
              </div>
            </div>
            <ul className="mb-10 text-xl font-medium">
              <li className="mb-6 flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  All features in <span className="text-white">Basic</span>
                </span>
              </li>
              <li className="mb-6 flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  Flexible <span className="text-white">call scheduling</span>
                </span>
              </li>
              <li className="flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  <span className="text-white">15 TB</span> cloud storage
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex items-center justify-center rounded-xl bg-indigo-600 py-2 px-4 text-center text-2xl text-white"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
              />
            </a>
          </div>
          {/* Card third */}
          <div className="order-3 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-3 lg:w-full">
            <div className="mb-7 flex items-center border-b border-gray-300 pb-7">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                alt=""
                className="h-20 w-20 rounded-3xl"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">Enterprise</span>
                <span>
                  <span className="align-top text-xl font-medium text-gray-500">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">35 </span>
                </span>
                <span className="font-medium text-gray-500">/ user</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              <li className="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  All features in <span className="text-black">Startup</span>
                </span>
              </li>
              <li className="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Growth <span className="text-black">oriented</span>
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  <span className="text-black">Unlimited</span> cloud storage
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex items-center justify-center rounded-xl bg-indigo-600 py-2 px-4 text-center text-xl text-white"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
