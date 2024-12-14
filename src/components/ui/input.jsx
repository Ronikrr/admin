import React from 'react';

const Input = ({ type, value, onChange, placeholder }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='w-full rounded border border-[rgb(226,232,240)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[rgb(60,80,224)] focus-visible:outline-none placeholder:capitalize '
        />
    );
};

export default Input;
