import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import GetProducts from '../../../Hooks/GetProductsApi/GetProductsApi';
import Loading from '../../../Shared/Loading/Loading';
import ShowProducts from './ShowProducts';

const Products = () => {
    const { loading, products } = GetProducts();


    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <Typography style={{ fontWeight: 'bold', padding: '20px 0' }} variant='h4'>
                    OUR WATCH'S
                    <Divider />
                </Typography>

                {
                    loading ?
                        <Loading />
                        :
                        <Grid container spacing={2}>
                            {
                                products.slice(0, 6).map(product => <ShowProducts key={product._id} product={product}></ShowProducts>)
                            }
                        </Grid>
                }
            </Box>
        </Container>
    );
};

export default Products;