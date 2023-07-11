import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";
import React from "react";
import {Link} from "react-router-dom";
import classnames from "classnames";
import PaymentParcel from "./PaymentParcel";
import PaymentOne from "./PaymentOne";

export default function AcessButton() {
    return (

        <div className="section section-tabs">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="10" xl="6">
                        <Card>
                           <div className="p-4">
                               <h2 className="title">Pagamento feito com sucesso</h2>
                               <Button color="primary" to="/pdf" tag={Link}>
                                   Abrir ebook
                               </Button>
                           </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}