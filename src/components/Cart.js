import React,{useContext, useState, useEffect} from 'react'
import Colors from './Colors';
import {DataContext} from './DataContext/DataProvider'
import './Cart.css'
import DetailThumb from './DetailThumb';
import Sizes from './Sizes';
import {Link} from 'react-router-dom'

export default function Cart() {
    // console.log(useParams());
   
    const value = useContext(DataContext)
    const [carts, setCarts] = value.carts
    const [total, setTotal] = useState(0)
    
    useEffect(()=>{
        const getTotal =()=>{
            const res = carts.reduce((prev, item)=>{
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    },[carts])

    const reduction = id =>{
        carts.forEach(item =>{
            if(item._id === id){
                item.count === 1  ? item.count = 1 : item.count -=1; 
            }
        })
        setCarts([...carts])
    }

    const increase = id =>{
        carts.forEach(item =>{
            if(item._id === id){
                item.count += 1; 
            }
        })
        setCarts([...carts])
    }

    const deleteItem =(id)=>{
        if(window.confirm("bạn có chắc không?")){
            const removeItem = [...carts].filter(item => item._id !==id)
            setCarts( removeItem)
        }     
    }
   

    if(carts.length === 0){
        return <h3 className="gg"> Giỏ hàng trống</h3>
    }
    // console.log(details);
    return (
       <>
            {
                carts.map(product =>(
                    <div className="details cart" key={product._id}>
                        <div className="img-container"
                         style={{backgroundImage: `url(${product.images[0]})`, borderRadius:"10px"}}/>
                            <div className="box-details">
                                <h2>{product.title}</h2>
                                <h3>{product.price} ₫</h3>

                                    <Colors colors={product.colors}/>

                                    <Sizes sizes={product.sizes} />

                                <p>{product.description}</p>
                                <p>{product.content}</p>
                                
                                <div className="amount">
                                    <button className="count" onClick={()=> reduction(product._id)}>-</button>
                                    <span>{product.count}</span>
                                    <button className="count" onClick={()=>increase(product._id)}>+</button>
                                </div>

                                <div className="delete" onClick={()=>deleteItem(product._id)}>X</div>
                            </div>
                     
                    </div>
                ))
            }
            <div className="total">
                <Link to="/payment">Thanh toán</Link>
                <h3>Tổng: {total} ₫</h3>
            </div>
       </>
    )
}
