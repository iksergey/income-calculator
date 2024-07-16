import React, { useState } from 'react';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const initialPrice = 5500;

    const [price, setPrice] = useState(initialPrice);
    const [discount, setDiscount] = useState(30);
    const [quantity, setQuantity] = useState(1);

    const calculateDiscountedPrice = () => {
        return (price - (price * discount / 100)).toFixed(2);
    };

    const calculateTotalPrice = () => {
        const total = calculateDiscountedPrice();
        return ((total - (total * 0.06 + total * 0.07)) * 0.2 * quantity).toFixed(2);
    };

    return (
        <Container className="py-5">
            <Card className="shadow">
                <Card.Body className="p-4">
                    <h1 className="text-center mb-5 display-4">Калькулятор дохода</h1>
                    <Form className="fs-5">
                        <Form.Group as={Row} className="mb-4 align-items-center">
                            <Form.Label column xs={12} md={5} lg={4} className="fw-bold">Стоимость без скидки:</Form.Label>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    plaintext
                                    readOnly
                                    value={`${price} ₽`}
                                    className="fs-4"
                                />
                                <Form.Range
                                    min={initialPrice}
                                    max={10000}
                                    step={50}
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-4 align-items-center">
                            <Form.Label column xs={12} md={5} lg={4} className="fw-bold">Размер скидки:</Form.Label>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Range
                                    min={30}
                                    max={45}
                                    value={discount}
                                    onChange={(e) => setDiscount(Number(e.target.value))}
                                />
                                <div className="text-center fs-4">{discount}%</div>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-4 align-items-center">
                            <Form.Label column xs={12} md={5} lg={4} className="fw-bold">Количество купивших:</Form.Label>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Range
                                    min={1}
                                    max={100}
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                />
                                <div className="text-center fs-4">{quantity}</div>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-4 align-items-center">
                            <Form.Label column xs={12} md={5} lg={4} className="fw-bold">
                                Цена с учётом скидки:
                            </Form.Label>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    plaintext
                                    readOnly
                                    value={`${calculateDiscountedPrice()} ₽`}
                                    className="fs-4 text-success"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="align-items-center">
                            <Form.Label column xs={12} md={5} lg={4} className="fw-bold">
                                Мой доход:
                            </Form.Label>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    plaintext
                                    readOnly
                                    value={`${calculateTotalPrice()} ₽`}
                                    className="fs-3 text-primary fw-bold"
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default App;
