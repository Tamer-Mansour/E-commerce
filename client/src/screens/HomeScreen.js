import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import Product from "../components/Porduct/Product";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {error, loading, products} = productList

    const loadProducts = () => {
        dispatch(listProducts())
    }
    useEffect(() => {
        loadProducts();
    }, [dispatch]);
// const products = []
    return (
        <>
            <h1>Latest Products</h1>
            {loading
                ? <h2>Loading...</h2>
                : error
                    ? <h3>{error}</h3>
                    : <Row>
                        {products.length > 0 &&
                            products.map(product => {
                                return (
                                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                        <Product product={product}/>
                                    </Col>
                                );
                            })}
                    </Row>
            }

        </>
    );
}

export default HomeScreen;