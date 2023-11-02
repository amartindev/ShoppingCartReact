import { useEffect, useState } from "react"

export const ComprasPage = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async() => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProducts(data)
    }

    useEffect(() => {
      fetchProducts()

    }, [])
    
  return (
    <>
        <h1>Shopping</h1>
        <hr/>
        
    </>
  )
}
