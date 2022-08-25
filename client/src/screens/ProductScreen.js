import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Col, Image, ListGroup, Row} from "react-bootstrap";
import Rating from "../components/Rating/Rating";
import axios from "axios";

const ProductScreen = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    let url = "/api/products";

    const loadProducts = async () => {
        try {
            const response = await axios.get(url + `/${id}/`);
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <>
            <Link to={'/'} className={'btn btn-light my-3'}>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant={'flush'}>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: $ {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: $ {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                   $ {product.price}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    State:
                                </Col>
                                <Col>
                                     {product.countInStock >0 ? 'In Stock' : 'Out Of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' disabled={product.countInStock === 0} type={'button'}>Add to Cart</Button>
                        </ListGroup.Item>
                        <ListGroup.Item>

                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
}
export default ProductScreen;