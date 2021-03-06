import React from 'react';
import 'twin.macro';

export const Footer: React.FC = () => (
  <footer tw="text-gray-700">
    <div tw="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a tw="flex font-medium items-center md:justify-start justify-center text-gray-900">
        <span tw="ml-3 text-xl">🌃 バッター星座ジェネレーター</span>
      </a>
      <p tw="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2020 バッター星座ジェネレーター
        <a
          href="https://twitter.com/uitspitss"
          tw="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @uitspitss
        </a>
      </p>
      <span tw="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a
          href="https://twitter.com/uitspitss"
          tw="ml-3 text-gray-500"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            tw="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
      </span>
    </div>
  </footer>
);
