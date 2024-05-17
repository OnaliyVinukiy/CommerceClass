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
     <br/>
      <div className="flex justify-center space-x-8 mt-10">
      <div className="w-64 h-64 rounded-full bg-blue-800 glow flex items-center justify-center">
        <span className="text-white text-3xl text-center font-bold">100%<br/>Pass Rate</span>
      </div>
      <div className="w-64 h-64 rounded-full bg-red-700 glow flex items-center justify-center">
        <span className="text-white text-3xl text-center font-bold">10+ Years <br/> Service</span>
      </div>
      <div className="w-64 h-64 rounded-full bg-green-800 glow flex items-center justify-center">
        <span className="text-white text-3xl text-center font-bold">500+ <br/> Students Educated</span>
      </div>
      <div className="w-64 h-64 rounded-full bg-purple-700 glow flex items-center justify-center">
        <span className="text-white text-3xl text-center font-bold">Experienced<br/> Government Teacher</span>
      </div>
    </div>

      </section>
      <section>
        <br/><br/><br/>
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
            <h5 class="mb-4 text-2xl font-medium text-black-500 dark:text-gray-400">
              2025 O/L English Medium
            </h5>
            
            <ul role="list" class="space-y-5 my-7 mt-10">
              <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                 Group Class
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                 Group Class
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                 Group Class
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                 Group Class
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                 Group Class
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                 Group Class
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span class="text-base font-normal text-lg leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  6.00 PM - 8.00 PM
                </span>
              </li>
              <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
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
      <section>
      <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
      </section>
    </div>
  );
}
