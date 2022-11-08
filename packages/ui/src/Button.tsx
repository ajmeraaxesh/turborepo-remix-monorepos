import * as React from "react";
export const Button = () => {
  return (
    <div className="rounded-md">
      <a href="https://news.google.com">
        <div className="max-w-md">

          <div className="flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium text-red-800 no-underline hover:bg-gray-700 dark:bg-white dark:text-cyan-600 dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6">
            Read the docs
            <span className="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
              →, It works
            </span>
          </div>
        </div>
      </a>
    </div>
  )
};
