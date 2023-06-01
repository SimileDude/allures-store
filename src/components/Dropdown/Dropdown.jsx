import React from 'react'

const Dropdown = ({ type, values, onChange }) => {
    return (
        <div className="flex flex-col p-2">
            <label htmlFor={type} className="font-bold mb-2 font-alegreya">
                {type}
            </label>
            <select
                name={type}
                id={type}
                className="focus:ring-2 focus:ring-earthYellow outline-none border-b-2 border-earthYellow"
                onChange={onChange}
            >
                {values.map((value, index) => (
                    <option key={`${index}-${value}`}>{value}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown
