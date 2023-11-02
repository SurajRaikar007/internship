import React, { useEffect, useState } from 'react'
import './Product.css'

const Productz = () => {
        
    const[dataz,setData] = useState([])

    useEffect(()=>{
            getData();
    },[])

        async function getData()
        {
                const item = await fetch("https://fakestoreapi.com/products")
                const json = await item.json();
                setData(json);
        }

  return (
    
    <div id='main'>
        {
        dataz.map((list)=>[
            <div id='box'>
                <img src={list.image} alt="" />
                <h2>{list.title}</h2>
                <p>Price - {list.price}</p>
                <button>shop now</button>
            </div>

        ])
        }
        </div>
  )
}

export default Productz