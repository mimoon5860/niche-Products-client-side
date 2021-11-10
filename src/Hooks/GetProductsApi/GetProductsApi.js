import axios from "axios";
import { useEffect, useState } from "react"


const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(products => {
                setProducts(products.data);
                setLoading(false);
            })
    }, [])

    return { loading, products };
}

export default GetProducts;