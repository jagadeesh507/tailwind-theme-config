import React from "react";
import ThemeChange from "@/utils/theme-change";

function NavBar() {
  return (
    <nav class="bg-background text-baseContent sticky top-0 z-20">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            className="h-12 w-12"
            preserveAspectRatio="xMidYMid"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 153.6"
          >
            <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
              <stop offset="0" stop-color="#2298bd" />
              <stop offset="1" stop-color="#0ed7b5" />
            </linearGradient>
            <path
              d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
              fill="url(#a)"
            />
          </svg>
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-baseContent">
            Tailwind Theme
          </span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ThemeChange />
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-background text-baseContent">
            <li>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-baseContent hover:text-primary rounded"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-baseContent rounded hover:text-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-baseContent rounded hover:text-primary"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-baseContent rounded hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
