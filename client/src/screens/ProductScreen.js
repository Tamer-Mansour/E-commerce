import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import Rating from "../components/Rating/Rating";
import {useDispatch, useSelector} from "react-redux";
import {listProductDetails} from "../actions/productActions";
import Loader from "../components/loader/Loader";
import Message from "../components/message/Message";
import {useNavigate} from 'react-router-dom';

const ProductScreen = () => {
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const productDetails = useSelector(state => state.productDetails)
    const {error, loading, product} = productDetails
    const loadProducts = () => {
        dispatch(listProductDetails(id))
    };
    useEffect(() => {
        loadProducts();
    }, []);

    const addToCardHandler = () =>{
        navigate(`/cart/${id}?qty=${qty}`);
    }
    return (
        <>
            <Link to={'/'} className={'btn btn-light my-3'}>Go Back</Link>
            {loading ? <Loader/> : error ? <Message variant={'danger'}>{error}</Message> :
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid/>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant={'flush'}>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`}
                                        color={'#f8e825'}/>
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
                                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col xs={'auto'} className={'my-1'}>
                                            <Form.Control as={'select'} value={qty} onChange={(e) => {
                                                setQty(e.target.value);
                                            }}>
                                                {
                                                    [...Array(product.countInStock).keys()].map((x) => {
                                                        return (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        );
                                                    })
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <Button
                                    onClick={addToCardHandler}
                                    className='btn-block'
                                    disabled={product.countInStock === 0}
                                    type={'button'}>Add
                                    to Cart
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item>

                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            }
        </>
    );
}
export default ProductScreen;