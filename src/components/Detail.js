import React,{useContext, useState, useRef} from 'react'
import {useParams} from 'react-router-dom'
import Colors from './Colors';
import {DataContext} from './DataContext/DataProvider'
import './Detail.css'
import DetailThumb from './DetailThumb';
import Sizes from './Sizes';
import {Link} from 'react-router-dom'

export default function Detail() {
    // console.log(useParams());
    const {id} = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    const [carts, setCarts] = value.carts

    const [indeximg, setIndeximg] = useState(0);
    const imgDiv = useRef();

    const details = products.filter((product, index)=>{
        return product._id === id;
    })

    const handleMouseMove = (e) =>{
        // console.log(e)
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width *100
        const y = (e.pageY - top) / height *100
        // console.log(imgDiv.current);
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }
    // console.log(details);
    return (
       <>
            {
                details.map(product =>(
                    <div className="details" key={product._id}>
                        <div className="img-container"
                         style={{backgroundImage: `url(${product.images[indeximg]})`, borderRadius:"10px"}} 
                         onMouseMove={handleMouseMove}
                         onMouseLeave ={()=> imgDiv.current.style.backgroundPosition = `center`}
                         ref={imgDiv}/>
                            <div className="box-details">
                                <h2>{product.title}</h2>
                                <h3>{product.price} ₫</h3>

                                    <Colors colors={product.colors}/>

                                    <Sizes sizes={product.sizes} />

                                <p>{product.description}</p>
                                <p>{product.content}</p>
                                
                                    <DetailThumb images={product.images} setIndeximg={setIndeximg}/>

                                <Link to="/carts" className='btnCart' onClick={()=>addCart(product._id)}>thêm vào giỏ </Link>
                            </div>
                     
                    </div>
                ))
            }
       </>
    )
}
