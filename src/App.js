import React from 'react';
import  './app.css';

import { SliderInput } from "./SliderInput";

const MIN_VALUE = 0;
const MAX_VALUE = 100;

export default function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SliderInput min={MIN_VALUE} max={MAX_VALUE} onSubmit={console.log} />
    </div>
  );
}
