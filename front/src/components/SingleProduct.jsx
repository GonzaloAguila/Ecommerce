import React from "react";
import { Basket } from "react-bootstrap-icons";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export default ({
  pText,
  productSelected,
  addProdudHandler,
  ratingAvg,
  reviews,
}) => {
  return (
    <div>
      {productSelected.id && (
        <Container className="mt-5">
          <Row md="auto">
            <Col md="auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img md="auto" variant="top" src={productSelected.image} />
              </Card>
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  <h2>{productSelected.name.toUpperCase()}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Descripcion:</strong> {productSelected.descripcion}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Stock:</strong> {productSelected.stock}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Precio:</strong> {`$${productSelected.price},00`}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Rating:</strong>{" "}
                  {reviews.length > 0
                    ? [...Array(ratingAvg())].map(() => {
                        return (
                          <label>
                            <FaStar size={22} color={"#ffc107"} />
                          </label>
                        );
                      })
                    : "No hay reviews"}
                </ListGroup.Item>
                <ListGroup.Item>
                <Button variant="outline-info" disabled={productSelected.stock ? false : true}
                  onClick={() => addProdudHandler(productSelected.id)}>Agregar al carrito <Basket /></Button>
                  <br/>
                   {pText ? <Button variant="success" disabled className='addCar'>
                              {productSelected.name} agregado al carrito.
                            </Button> : null}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <br />
        </Container>
      )}
    </div>
  );
};
