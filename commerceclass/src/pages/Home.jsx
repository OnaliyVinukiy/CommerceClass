import React from "react";
import { Carousel } from "flowbite-react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
// Assuming the Header component is in a file named Header.js inside a directory named components

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getHeightStyle = () => {
    if (windowWidth < 640) {
      // Set the height for mobile view
      return { height: "15rem" };
    } else {
      // Set the height for larger screens
      return { height: "35rem" };
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="relative z-0 mt-14" style={getHeightStyle()}>
          {/* Set a lower z-index for the carousel */}
          <Carousel
            slideInterval={5000}
            theme={{
              item: {
                base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
                wrapper: {
                  off: "w-full flex-shrink-0 transform cursor-default snap-center",
                  on: "w-full flex-shrink-0 transform cursor-grab snap-center",
                },
              },
              scrollContainer: {
                base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
                snap: "snap-x",
              },
            }}
          >
            <img
              src="https://raw.githubusercontent.com/OnaliyVinukiy/CommerceClass/main/commerceclass/src/pages/class3.jpeg"
              alt="..."
              style={{ width: "100%", height: "100%" }}
            />
            <img
              src="https://raw.githubusercontent.com/OnaliyVinukiy/CommerceClass/main/commerceclass/src/pages/class2.jpeg"
              alt="..."
              style={{ width: "100%", height: "100%" }}
            />
            <img
              src="https://raw.githubusercontent.com/OnaliyVinukiy/CommerceClass/main/commerceclass/src/pages/class1.jpeg"
              alt="..."
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel>
        </div>
      </div>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Best Commerce Class in Sri Lanka
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Business and Accounting Studies Group Classes for GCE O/L
              Students. Business Studies Group Classes for GCE A/L Students.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Check Time Tables
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contact Mevan Sir
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://raw.githubusercontent.com/OnaliyVinukiy/CommerceClass/main/commerceclass/src/pages/sir.jpeg"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 mt-10">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
           Check out the Class Timetable
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Your Academic and Life Success Starts Here!<br/> Join Now for Efficient and Effective Learning!
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-semibold">$</span>
              <span class="text-5xl font-extrabold tracking-tight">49</span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  2 team members
                </span>
              </li>
              <li class="flex">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  20GB Cloud storage
                </span>
              </li>
              <li class="flex">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Integration help
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-semibold">$</span>
              <span class="text-5xl font-extrabold tracking-tight">49</span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  2 team members
                </span>
              </li>
              <li class="flex">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  20GB Cloud storage
                </span>
              </li>
              <li class="flex">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Integration help
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-semibold">$</span>
              <span class="text-5xl font-extrabold tracking-tight">49</span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  2 team members
                </span>
              </li>
              <li class="flex">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  20GB Cloud storage
                </span>
              </li>
              <li class="flex">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Integration help
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
