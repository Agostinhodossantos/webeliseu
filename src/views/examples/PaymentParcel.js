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
import {UserAuth} from "../../context/AuthContext";
import {setUser} from "../../data/providers";
import {requestPay} from "../../utils/utils";


export default function PaymentParcel() {

    const [fullNameFocus, setFullNameFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const { user } = UserAuth();

    const navigate = useNavigate();

    const setUserData = async (name, phone, stage) => {

        const userData = {
            uid: user.uid,
            type: "unique",
            status: "pending",
            stage: stage,
            name: name,
            phone: phone,
            isPaidVideo: false,
            price: 520,
        }

        await setUser(userData)
    }

    const handleLogin = () => {
        setIsLoading(true)
        requestPay(phone, 110, 1).then((data) => {
            if (data) {
                setUserData(name, phone).then(r => {
                    alert("Pagamento feito com sucesso")
                    // navigate("/pdf")
                })
            } else {
                alert("Ocorreu um erro")
            }
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            alert(error)
        })
    }

    return (
        <div className="">
            <Container>

                <Row className="row-grid justify-content-between align-items-center">
                    <Col className="mb-lg-auto" lg="12">

                        <Card className="card-register">

                            <CardBody>
                                <p>
                                    Os pagamentos em prestações estão divididas em 3 partes:
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
                                            value={name}
                                            onChange={(e)=>{
                                                setName(e.target.value)
                                            }}
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
                                            value={phone}
                                            onChange={(e)=>{
                                                setPhone(e.target.value)
                                            }}
                                            onFocus={(e) => setPasswordFocus(true)}
                                            onBlur={(e) => setPasswordFocus(false)}
                                        />
                                    </InputGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                {isLoading ? (
                                    <p>Processando</p>
                                ): (
                                    <Button onClick={handleLogin} className="btn-round" color="primary" size="lg">
                                        Processar o Pagamento
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
