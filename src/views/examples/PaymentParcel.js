import React from "react";
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import {Link, useNavigate} from "react-router-dom";


export default function PaymentParcel() {

    const [fullNameFocus, setFullNameFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/', { replace: true });
    }

    return (
        <div className="">
            <Container>

                <Row className="row-grid justify-content-between align-items-center">
                    <Col className="mb-lg-auto" lg="12">

                        <Card className="card-register">

                            <CardBody>
                                <p>
                                    Os pagamentos em prestações estão divididas em 2  partes e no pagemento de cada prestação tem suas aulas.
                                </p>

                                <FormGroup check disabled>
                                    <Label check>
                                        <Input disabled type="checkbox" />
                                        <span className="form-check-sign" />
                                        3ª Prestação 205Mt
                                    </Label>
                                </FormGroup>

                                <FormGroup check disabled>
                                    <Label check>
                                        <Input disabled type="checkbox" />
                                        <span className="form-check-sign" />
                                        2ª Prestação 205Mt
                                    </Label>
                                </FormGroup>

                                <FormGroup check disabled>
                                    <Label check>
                                        <Input defaultChecked disabled type="checkbox" />
                                        <span className="form-check-sign" />
                                        1ª Prestação 110Mt
                                    </Label>
                                </FormGroup>

                                <br/>

                                <Form className="form">
                                    <InputGroup
                                        className={classnames({
                                            "input-group-focus": emailFocus,
                                        })}
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="tim-icons icon-email-85" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Nome"
                                            type="text"
                                            onFocus={(e) => setEmailFocus(true)}
                                            onBlur={(e) => setEmailFocus(false)}
                                        />
                                    </InputGroup>
                                    <InputGroup
                                        className={classnames({
                                            "input-group-focus": passwordFocus,
                                        })}
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="tim-icons icon-lock-circle" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Numero M-Pesa"
                                            type="text"
                                            onFocus={(e) => setPasswordFocus(true)}
                                            onBlur={(e) => setPasswordFocus(false)}
                                        />
                                    </InputGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button onClick={handleLogin} className="btn-round" color="primary" size="lg">
                                    Proceder o Pagamento
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
