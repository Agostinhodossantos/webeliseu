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
import {UserAuth} from "../../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../../data/providers";
import {requestPay} from "../../../utils/utils";

// core components



export default function PaymentOne2() {
    const [fullNameFocus, setFullNameFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const { user } = UserAuth();

    const navigate = useNavigate();

    const setUserData = async (name, phone) => {

        const userData = {
            uid: user.uid,
            type: "unique",
            status: "pending",
            name: name,
            book: 2,
            phone: phone,
            isPaidVideo: false,
            price: 1550,
        }

        await setUser(userData)
    }

    const handleLogin = () => {
        setIsLoading(true)
        requestPay(phone, 1550).then((data) => {
            if (data) {
                setUserData(name, phone).then(r => {
                    navigate("/pdf")
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
                                <h5>Preço: 1550Mt</h5>
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
                                            type="number"
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
