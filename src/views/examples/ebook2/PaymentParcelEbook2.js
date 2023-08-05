import React, {useEffect} from "react";
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
import {requestPay} from "../../../utils/utils";
import {getUserByUid, setUser} from "../../../data/providers";
import {UserAuth} from "../../../context/AuthContext";
import {useNavigate} from "react-router-dom";

// core components



export default function PaymentParcelEbook2() {

        const [fullNameFocus, setFullNameFocus] = React.useState(false);
        const [emailFocus, setEmailFocus] = React.useState(false);
        const [passwordFocus, setPasswordFocus] = React.useState(false);

        const [name, setName] = React.useState('');
        const [phone, setPhone] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);
        const [payStage, setPayState] = React.useState(1);

        const { user } = UserAuth();

        const navigate = useNavigate();

        useEffect(()=> {
            if (user == null) {
                return
            }

            const current = getUserByUid(user.uid).then((data) => {

                if (data != null) {

                    if (data.stage == 1) {
                        setPayState(2)
                    } else if (data.stage == 2) {
                        setPayState(3)
                    }

                }

            }).catch((e) => {
                setIsLoading(false)
            })
        },[user])

        const setUserData = async (name, phone, stage, price) => {

            var payStatus = "pending"

            if (stage == 3) {
                payStatus = "aproved"
            }

            const userData = {
                uid: user.uid,
                type: "unique",
                status: payStatus,
                stage: stage,
                book: 2,
                name: name,
                phone: phone,
                isPaidVideo: false,
                price: price,
            }

            await setUser(userData)
        }

        const handleLogin = () => {
            setIsLoading(true)

            var price = 510

            if (payStage == 2) {
                price = 520
            } else if (payStage == 3) {
                price = 520
            } else {
                price = 510
            }

            requestPay(phone, price ).then((data) => {
                if (data) {
                    setUserData(name, phone, payStage, price).then(r => {
                        alert("Pagamento feito com sucesso")

                        // if (payStage == 3) {
                        //     navigate("/pdf")
                        // }

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
                                            <Input disabled type="checkbox" checked={payStage >= 3} />
                                            <span className="form-check-sign" />
                                            3ª Prestação 520Mt
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check disabled>
                                        <Label check>
                                            <Input disabled type="checkbox" checked={payStage >= 2} />
                                            <span className="form-check-sign" />
                                            2ª Prestação 520Mt
                                        </Label>
                                    </FormGroup>

                                    <FormGroup check disabled>
                                        <Label check>
                                            <Input disabled type="checkbox" checked={payStage >= 1} />
                                            <span className="form-check-sign" />
                                            1ª Prestação 510Mt
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
