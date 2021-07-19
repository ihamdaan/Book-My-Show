import React from 'react'

const Cast = (props) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-32 h-32">
                <img src={props.image}
                alt="crew man" className="w-full h-full rounded-full"/>
            </div>
            <h1 className="text-lg text-gray-800">{props.castName}</h1>
            <h3 className="text-sm text-gray-500">as {props.role}</h3>
        </div>
    )
}

export default Cast;
