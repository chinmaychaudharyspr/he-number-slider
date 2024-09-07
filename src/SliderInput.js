import { useState } from 'react';

export const SliderInput = ({ min, max, onSubmit }) => {
  const [value, setValue] = useState();

  const onChange = (event) => {};

  const onSubmitClick = () => {
    onSubmit(value);
  };

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label
          htmlFor="slider-input"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Slider Input
        </label>
        <div className="mt-2">
          <input
            id="slider-input"
            role="slider"
            type="range"
            value={value}
            min={min}
            max={max}
            onChange={onChange}
            className=""
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="number-input"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Number Input
        </label>
        <div className="mt-2">
          <input
            id="number-input"
            role="number"
            type="number"
            value={value}
            min={min}
            max={max}
            onChange={onChange}
            className="block w-[140px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button
        role="button"
        onClick={onSubmitClick}
        className="sm:col-span-6 bg-blue-600 rounded p-2 text-white"
      >
        Submit
      </button>
    </div>
  );
};
