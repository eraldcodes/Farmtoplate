import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8080";

export const get = (url, headers = {}) => {
    const config = {
        headers
    };

    return axios.get(baseUrl + url, config);
};

const getProducts = (month) => {
    return get("/api/products?month=" + month)
    .then(data => {return data.data.data.products});
};


const seasonMonths = new Map();
seasonMonths.set(12, "Winter");
seasonMonths.set(1, "Winter");
seasonMonths.set(2, "Winter");

seasonMonths.set(3, "Spring");
seasonMonths.set(4, "Spring");
seasonMonths.set(5, "Spring");

seasonMonths.set(6, "Summer");
seasonMonths.set(7, "Summer");
seasonMonths.set(8, "Summer");

seasonMonths.set(9, "Autumn");
seasonMonths.set(10, "Autumn");
seasonMonths.set(11, "Autumn");

const seasonBgColor = new Map();
seasonBgColor.set("Winter", "rgb(167,199,231)");
seasonBgColor.set("Spring", "rgb(60,179,113)");
seasonBgColor.set("Summer", "rgb(255,250,160)");
seasonBgColor.set("Autumn", "rgb(255,127,80)");

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [seasonStyle, setSeasonStyle] = useState({});

    useEffect(() => {
        const date = new Date();
        const month = date.getMonth() + 1;
        getProducts(month).then(data => setProducts(data));

        setSeasonStyle({
            backgroundColor: seasonBgColor.get(seasonMonths.get(month)),
            height: 'relative',
            fontSize: '50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        });
    }, []);

    return (
        <div style={seasonStyle}>
            <Grid
                container
                spacing={0}
                paddingTop={1}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <h2 style={{fontSize:"6vmin"}}>Whats in Season!</h2>
            </Grid>

            {products.map((product, index) =>
                <Box
                    key={index}
                    sx={{
                        display: 'inline-flex',
                        m: 1,
                        p: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) => theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2.5,
                        fontSize: '2.3vmin',
                        fontWeight: '700',
                        alignItems: 'center',
                        justifyContent: 'center'
                        

                    }}
                >
                    {product}
                </Box>
            )
            }
        </div>
    );
};

export default ProductList;
