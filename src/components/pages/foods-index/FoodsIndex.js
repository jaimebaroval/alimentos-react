import React, { Component } from 'react'

/* Bootstrap Components */
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

/* Foods Array */
import foodsArray from '../../../foods-info'

class FoodsIndex extends Component {

    constructor() {
        super()
        this.state = { foods: foodsArray }
    }

    render() {

        return (
            <>
                <Container className="container-index">
                    <h1>Listado de alimentos</h1>
                    <Accordion>

                        {this.state.foods.map(food =>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={food._id}>
                                    <Row className="d-flex align-items-center">
                                        <Col className="d-flex justify-content-center">
                                            <i class="fa fa-plus"></i>
                                        </Col>
                                        <Col>
                                            <img className="food-index" src={`/img/${food.img}`} alt={food.name} />
                                        </Col>
                                        <Col md={2}>
                                            <strong>{food.name}</strong>
                                        </Col>
                                        <Col md={7} className="mt-3">
                                            <p class="food-desc">{food.description}</p>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-success" className="button-detail" href={`/detalle/${food._id}`}>Detalle</Button>
                                        </Col>
                                    </Row>

                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={food._id}>
                                    <Card.Body>
                                        <Row >
                                            <Col md={1}>
                                            </Col>
                                            <Col>
                                                <strong>Price</strong>
                                                <p>{food.price} €</p>
                                            </Col>
                                            <Col>
                                                <strong>Kcal</strong>
                                                <p>{food.kcal}</p>
                                            </Col>
                                            <Col>
                                                <strong>Protein</strong>
                                                <p>{food.protein}</p>
                                            </Col>
                                            <Col>
                                                <strong>Fat</strong>
                                                <p>{food.fat}</p>
                                            </Col>
                                            <Col>
                                                <strong>Carbs</strong>
                                                <p>{food.carbs}</p>
                                            </Col>
                                            <Col>
                                                <strong>Stock</strong>
                                                <p><strong>{food.stock}</strong></p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                        )}

                    </Accordion>
                </Container>
            </>
        )

    }

}

export default FoodsIndex