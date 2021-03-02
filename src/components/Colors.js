import React from 'react'

export default function Colors({colors}) {
    return (
        <div className="color">
            {
                colors.map((color, i) => (
                    <button key={i} style={{ background: color }}></button>
                ))
            }
        </div>
    )
}
