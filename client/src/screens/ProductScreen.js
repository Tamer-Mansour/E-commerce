import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Col, Image, ListGroup, Row} from "react-bootstrap";
import Rating from "../components/Rating/Rating";
import {useDispatch, useSelector} from "react-redux";
import {listProductDetails} from "../actions/productActions";
import Loader from "../components/loader/Loader";
import Message from "../components/message/Message";


const ProductScreen = () => {
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
                                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' disabled={product.countInStock === 0} type={'button'}>Add to
                                Cart</Button>
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