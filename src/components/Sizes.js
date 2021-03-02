import React from 'react'

export default function Sizes({sizes}) {
    return (
        <div className="sizes">
            {
                sizes.map((size, i) => (
                    <button key={i}>{size}</button>
                ))
            }
        </div>
    )
}
