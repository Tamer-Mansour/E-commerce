import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import Product from "../components/Porduct/Product";
import axios from "axios";


const HomeScreen = () => {
    const [products, setProducts] = useState({});
    let url = "/api/products";
    const loadProducts = async () => {
        try {
            const response = await axios.get(url);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.length >0 &&
                    products.map(product => {
                    return (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default HomeScreen;