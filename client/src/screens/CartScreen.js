import React, {useEffect} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../actions/cartActions";
import {Button, Card, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import Message from "../components/message/Message";

const CartScreen = () => {
    const {id} = useParams();
    const productId = id;
    const navigate = useNavigate();
    const location = useLocation();
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const loadProducts = () => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }
    useEffect(() => {
        loadProducts()
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        navigate(`/login?redirect=shipping`)
    }

    return (<>
        <Row>
            <Col md={8}>
                <h1>Shopping cart</h1>
                {cartItems.length === 0 ? (<Message variant={'info'}>
                    Your Cart is empty <Link to={'/'}>Go Back</Link>
                </Message>) : (<ListGroup variant={'flush'}>
                        {cartItems.map((item) => {
                            return (<ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        $ {item.price}
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control
                                            as={'select'}
                                            value={item.qty}
                                            onChange={(e) => {
                                                dispatch(addToCart(item.product, Number(e.target.value)));
                                            }}>
                                            {[...Array(item.countInStock).keys()].map((x) => {
                                                return (<option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>);
                                            })}
                                        </Form.Control>
                                    </Col>
                                    <Col md={1}>
                                        <Button type={'button'} variant={'light'}
                                                onClick={() => removeFromCartHandler(item.product)}>
                                            <i className={'fas fa-trash'}/>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>);
                        })}
                    </ListGroup>

                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant={'flush'}>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                            $ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <Button type={'button'} className={'btn-block'} disabled={cartItems.length === 0}
                                onClick={checkoutHandler}>
                            Proceed To Checkout
                        </Button>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>);
}

export default CartScreen;