import axios from "axios";
import { useEffect, useState } from "react"


const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://tranquil-forest-55294.herokuapp.com/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
    }, [])

    return { loading, products };
}

export default GetProducts;