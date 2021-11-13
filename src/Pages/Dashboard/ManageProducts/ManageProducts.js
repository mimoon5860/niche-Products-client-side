import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Divider, Grid, TextareaAutosize } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ShowAllProductsForDelete from './ShowAllProductsForDelete';
import Loading from '../../../Shared/Loading/Loading';
import { Container } from '@mui/material';

const ManageProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get('https://tranquil-forest-55294.herokuapp.com/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
    }, [products])

    const button = {
        padding: '10px 25px',
        margin: '20px',
        fontWeight: 'bold',
        color: '#11A0DB',
        cursor: 'pointer'
    }


    const onSubmit = (data) => {
        console.log(data);
        axios.post('https://tranquil-forest-55294.herokuapp.com/product', data)
            .then(res => {
                console.log(res.data);
                alert('Product added');
                reset();
            })
    };

    const handleDelete = (id) => {
        if (products.length > 12) {
            const confirm = window.confirm('Are You sure?')
            if (confirm) {
                axios.delete(`https://tranquil-forest-55294.herokuapp.com/product/${id}`)
                    .then(res => {
                        console.log(res.data)
                        alert('Deleted')
                        const restData = products.filter(product => product._id !== id);
                        setProducts(restData);
                    })
            }

        } else {
            alert('Product should be more then 12')
        }
    }

    return (
        <Container>
            <h1 style={{ marginBottom: '20px', textAlign: "center" }}>Manage Products</h1>
            <h2 style={{ margin: '0 20px' }}>
                Add a Product
                <Divider />
            </h2>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <TextField
                            required
                            {...register("name")}
                            label="Watch Name"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}

                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

                        <TextField
                            required
                            {...register("brand")}
                            label="Watch Brand"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}

                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

                        <TextField
                            required
                            {...register("price")}
                            label="Price"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}

                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 2 }}>
                        <TextareaAutosize
                            required
                            {...register("details")}
                            aria-label="minimum height"
                            minRows={6}
                            placeholder="Watch Details"
                            style={{ width: '70%' }}
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

                        <TextField
                            required
                            {...register("img")}
                            label="Image Link"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}

                        />
                    </FormControl>
                    <br />
                    <input style={button} type='submit' value='Add Watch' />
                </form>
            </Box>
            <Box>
                <h2 style={{ margin: '20px 0' }}>
                    Delete a Product
                    <Divider />
                </h2>

                {
                    loading
                        ?
                        <Loading />

                        :
                        <Grid container spacing={2}>
                            {
                                products.map(product => <ShowAllProductsForDelete handleDelete={handleDelete} key={product._id} product={product} />)
                            }
                        </Grid>
                }

            </Box>

        </Container >
    );
};

export default ManageProducts;