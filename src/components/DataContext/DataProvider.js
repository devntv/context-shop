import React,{createContext, useState, useEffect} from 'react'
import {Data} from './Data'

export const DataContext = createContext();

export const DataProvider =({children}) => {
    const [products, setProducts] = useState(Data) 
    const [carts, setCarts] = useState([])

   
    const addCart = (id) =>{
        const check = carts.every(item =>{
            return item._id !== id
        })

        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCarts([...carts, ...data])
        }else{
            alert("added")
        }
    }
    useEffect(()=>{
        const cartAdd = JSON.parse(localStorage.getItem("cartAdd"))
        cartAdd && setCarts(cartAdd)
        // if(cartAdd) setCarts(cartAdd)
     },[])

    useEffect(()=>{
        localStorage.setItem("cartAdd", JSON.stringify(carts))
    }, [carts])



   const value ={
        products: [products, setProducts],
        carts: [carts, setCarts],
        addCart: addCart,
      
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}
