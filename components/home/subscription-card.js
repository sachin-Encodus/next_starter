import React from "react";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {MdDone} from 'react-icons/md'
const SubscriptionCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex justify-items-center gap-4 p-2 pt-24">
        <div  className="flex flex-col items-center justify-between lg:flex-row lg:items-start gap-20">
         {/* Card first */}
          <div className="order-2 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-1 lg:w-full">
            <div className="mb-7 flex items-center border-b border-gray-300 pb-7">
              
              <div className="ml-5">
                <span className="block text-2xl font-semibold text-left">Basic</span>
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
             
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <div className="border border-dashed mt-5 mb-5"/>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex items-center justify-center rounded-xl border border-green-600 py-2 px-2 text-center text-md text-green-600  "
            >
              Choose Plan
              <HiOutlineArrowNarrowRight className="ml-2"/>
              
            </a>
          </div>
          {/* Card second */}
          <div className="order-1 w-full flex-1 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-cyan-100 p-8 text-gray-400 shadow-xl sm:w-96 lg:order-2 lg:mt-0 lg:w-full">
            <div className="mb-8 flex items-center border-b border-gray-600 pb-8">
              
            <div className="ml-5">
                <span className="block text-2xl font-semibold text-left">Basic</span>
                <span>
                  <span className="align-top text-xl font-medium text-gray-500">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">10 </span>
                </span>
                <span className="font-medium text-gray-500">/ user</span>
              </div>
            </div>
            <ul className="mb-10 text-xl font-medium">
            <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <div className="border border-dashed mt-5 mb-5"/>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex items-center justify-center rounded-xl border border-green-600 py-2 px-2 text-center text-md text-green-600"
            >
              Choose Plan
              <HiOutlineArrowNarrowRight className="ml-2"/>
            </a>
          </div>
          {/* Card third */}
          <div className="order-3 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-3 lg:w-full">
          <div className="mb-7 flex items-center border-b border-gray-300 pb-7">
              
              <div className="ml-5">
                <span className="block text-2xl font-semibold text-left">Basic</span>
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
             
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <div className="border border-dashed mt-5 mb-5"/>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
              <li className="mb-2 flex justify-center items-center text-sm">
               <MdDone className="text-green-600"/>
                <span className="ml-3 text-neutral-500">
                  Get started with messaging
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex items-center justify-center rounded-xl border border-green-600 py-2 px-2 text-center text-md text-green-600  "
            >
              Choose Plan
              <HiOutlineArrowNarrowRight className="ml-2"/>
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
