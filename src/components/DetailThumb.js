import React from 'react'

export default function DetailThumb({images, setIndeximg}) {
    return (
        <div className="thumb">
            {
                images.map((img, i) => (
                    <img src={img} alt={img.title} key={i} 
                    onClick={()=>{ setIndeximg(i)}}/>
                ))
                
            }
        </div>
    )
}
