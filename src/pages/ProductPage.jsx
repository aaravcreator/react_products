import React, { useEffect, useState } from 'react'

const ProductPage = () => {

    const [products,setProducts] = useState([])
    const [productLoading,setProductLoading] = useState(false)


    const calcSellingPrice =(price,discount)=>{
        let selling_price = price - (discount*price)/100 
        return selling_price.toFixed(2)

    }
    const fetchProducts = ()=>{

        setProductLoading(true)
        fetch('https://dummyjson.com/products')
        .then((res)=>{

            return res.json()
        })
        .then((data)=>{

            console.log(data.products)
            setProducts(data.products)
            setProductLoading(false)

        })
    }

    useEffect( ()=>{

        fetchProducts()

    },[
        // dependencies
    ])

  return (
    <div>
     
<div className={productLoading?'px-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  animate-pulse':'px-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>




        {productLoading? <Skeleton/> :  products && products.map((product,index)=>{

        return (
            <div key={index}   className='bg-gray-100 rounded-xl' >
                <img src={product.images[0]} alt={product.title} className='h-48 w-full object-contain' />
                <div className='p-2'>

                <h2 className='text-xl font-bold '>{product.title}</h2>
                {/* <p>{product.description}</p> */}
                <p className='text-red-500 font-bold line-through'>$ {product.price}</p> <p className='text-green-500 font-bold'> $ {calcSellingPrice(product.price,product.discountPercentage)}</p>

                <button className='text-white bg-red-500 px-4 py-2 w-full rounded-lg hover:bg-red-600 hover:scale-105'>Add to Cart</button>
                </div>
                
                </div>
        )
        })}


</div>
    </div>
  )



function Skeleton(){
    
    return(
        <>
        
                {[1,2,3,4,5,6].map((item)=>{

                    return (<div    className=' bg-gray-100 rounded-xl' >
                    <div className='h-48 w-full'>
                        </div>
                    <div className='p-2'>
    
                    <div className=''></div>
                    {/* <p>{product.description}</p> */}
                    <p className='text-red-500 font-bold line-through'></p> <p className='text-green-500 font-bold'></p>
    
                    <button className='text-white h-8 px-4 py-2 w-full rounded-lg'></button>
                    </div>
                    
                    </div>)

                })}

            </>
        
        
    )
}  
}

export default ProductPage
