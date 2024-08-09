'use client';

import React from 'react';

const InputField = ({ id, label, type = 'text', value, onChange, required = false, pattern = null }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-bold mb-2 text-gray-800"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        pattern={pattern}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
