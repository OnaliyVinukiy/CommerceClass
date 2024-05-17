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
      <section class="bg-white dark:bg-gray-900" id="about">
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
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mt-2"
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
      <section id="portfolio">
        <br />
        <div class="flex flex-wrap justify-center mt-10">
          <div class="w-64 h-64 md:w-10 md:h-10 rounded-full bg-blue-800 glow flex items-center justify-center mb-8 md:mb-0 md:mr-8 mx-4 ">
            <span class="text-white text-3xl text-center font-bold">
              100%
              <br />
              Pass Rate
            </span>
          </div>
          <div class="w-64 h-64 md:w-10 md:h-10 rounded-full bg-red-700 glow flex items-center justify-center mb-8 md:mb-0 md:mr-8 mx-4">
            <span class="text-white text-3xl text-center font-bold">
              10+ Years <br /> Service
            </span>
          </div>
          <div class="w-64 h-64 md:w-10 md:h-10 rounded-full bg-green-800 glow flex items-center justify-center mb-8 md:mb-0 md:mr-8 mx-4">
            <span class="text-white text-3xl text-center font-bold">
              500+ <br /> Students Educated
            </span>
          </div>
          <div class="w-64 h-64 md:w-10 md:h-10 rounded-full bg-purple-700 glow flex items-center justify-center mb-8 md:mb-0 md:mr-8 mx-4">
            <span class="text-white text-3xl text-center font-bold">
              Experienced
              <br /> Government Teacher
            </span>
          </div>
        </div>
      </section>

      <section id="timetable">
        <br />
        <br />
        <br />
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 mt-10">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Check out the Class Timetable
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Your Academic and Life Success Starts Here!
            <br /> Join Now for Efficient and Effective Learning!
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
            <h5 class="mb-4 text-2xl font-medium text-black-500 dark:text-gray-400">
              2025 O/L English Medium
            </h5>

            <ul role="list" class="space-y-5 my-7 mt-10">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Group Class
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Every Saturday
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-50 text-center"
            >
              Join Now
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
            <h5 class="mb-4 text-2xl font-medium text-black-500 dark:text-gray-400">
              2025 O/L Sinhala Medium
            </h5>

            <ul role="list" class="space-y-5 my-7 mt-10">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Group Class
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Every Wednesday
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-50 text-center"
            >
              Join Now
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
            <h5 class="mb-4 text-2xl font-medium text-black-500 dark:text-gray-400">
              2026 O/L English Medium
            </h5>

            <ul role="list" class="space-y-5 my-7 mt-10">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Group Class
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Every Thursday
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-50 text-center"
            >
              Join Now
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
            <h5 class="mb-4 text-2xl font-medium text-black-500 dark:text-gray-400">
              2026 O/L Sinhala Medium
            </h5>

            <ul role="list" class="space-y-5 my-7 mt-10">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Group Class
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Every Saturday
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-50 text-center"
            >
              Join Now
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
            <h5 class="mb-4 text-2xl font-medium text-black-500 dark:text-gray-400">
              2025 A/L English Medium
            </h5>

            <ul role="list" class="space-y-5 my-7 mt-10">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Group Class
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Every Saturday
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-50 text-center"
            >
              Join Now
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-4">
            <h5 class="mb-4 text-2xl font-medium text-black-500 dark:text-gray-400">
              2025 A/L Sinhala Medium
            </h5>

            <ul role="list" class="space-y-5 my-7 mt-10">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Group Class
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Every Saturday
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-50 text-center"
            >
              Join Now
            </button>
          </div>
        </div>
      </section>
      <section id="contact">
        <section class="bg-white dark:bg-gray-900">
          <div class="flex flex-wrap justify-center gap-4">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contact Me
              </h2>
              <p class="mb-8 lg:mb-12 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Need to join my Commerce Class? Or need to know more
                information? Please contact me for any inquiries.
              </p>

              <div class="flex flex-wrap justify-center gap-4">
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-end px-4 pt-4 mt-4"></div>
                  <div class="flex flex-col items-center pb-10">
                    <img
                      class="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src="https://raw.githubusercontent.com/OnaliyVinukiy/CommerceClass/main/commerceclass/src/pages/sir.jpeg"
                      alt="Mevan Sir image"
                    />
                    <h5 class="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
                      මෙවන් සර්
                    </h5>
                    <div class="sirname">
                      <span class="text-lg font-semibold text-gray-500 dark:text-gray-400">
                        උත්තර පත්‍ර පරික්ෂක
                      </span>
                    </div>
                    <div class="sirname">
                      <span class="text-lg font-semibold text-gray-500 dark:text-gray-400">
                        පාඨශාලා ආචාර්ය
                      </span>
                    </div>
                    <span class="text-lg text-center font-medium text-gray-500 dark:text-gray-400">
                      MHRM, B.BA (HRM) sp - UoC
                    </span>
                    <span class="text-lg text-center font-medium text-gray-500 dark:text-gray-400">
                      National Diploma in Psychological Counselling - SLFI
                    </span>
                    <div class="flex mt-4 md:mt-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>

                      <span class="text-lg font-medium text-black-500 dark:text-gray-400 mx-4">
                        +94 77 876 6288
                      </span>
                    </div>
                    <div class="flex mt-2 md:mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                      </svg>

                      <span class="text-lg text-center font-medium text-black-500 dark:text-gray-400">
                        Ja Ela - Kanuwa
                        <br />A Safe Place to Learn
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
  <footer class="bg-gray-400 shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto py-8 md:py-8">
      <div class="flex flex-col items-center justify-between sm:flex-row sm:items-center">
        <a
          href="#"
          class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img src="https://raw.githubusercontent.com/OnaliyVinukiy/CommerceClass/main/commerceclass/src/components/logo.jpg" class="h-8" alt="Mevan Sir" />
          <div class="nametag">
            <span class="self-center text-3xl whitespace-nowrap dark:text-white ml-2">Mevan Sir</span>
          </div>
        </a>
        <ul class="flex flex-col sm:flex-row flex-wrap items-center mb-6 text-sm font-medium text-black-500 dark:text-gray-400">
          <li class="mb-2 sm:mb-0 sm:mr-6 mx-4">
            <a href="#" class="hover:underline text-black">Home</a>
          </li>
          <li class="mb-2 sm:mb-0 sm:mr-6 mx-4">
            <a href="#about" class="hover:underline text-black">About</a>
          </li>
          <li class="mb-2 sm:mb-0 sm:mr-6 mx-4">
            <a href="#portfolio" class="hover:underline text-black">Portfolio</a>
          </li>
          <li class="mb-2 sm:mb-0 mx-4">
            <a href="#contact" class="hover:underline text-black">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 text-center dark:text-gray-400">
        The Best Commerce Class
      </span>
    </div>
  </footer>
</section>

    </div>
  );
}
