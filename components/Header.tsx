import React from 'react';
import 'twin.macro';

export const Header: React.FC = () => (
  <header tw="text-gray-700">
    <div tw="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a tw="flex font-bold text-3xl items-center text-gray-900 mb-4 md:mb-0">
        <span tw="ml-3 md:text-3xl">🌃 バッター星座ジェネレーター</span>
      </a>
    </div>
  </header>
);
