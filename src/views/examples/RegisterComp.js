import React from "react";
import {UserAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../data/providers";
import {requestPay} from "../../utils/utils";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import {
    Button,
    Card,
    CardBody, CardFooter,
    Col,
    Container,
    Form, FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Label,
    Row
} from "reactstrap";
import classnames from "classnames";


export default function RegisterComp() {
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
            isPaidVideo: true,
            name: name,
            phone: phone,
            status: "pending",
            price: 520,
        }

        await setUser(userData)
    }

    const handlePayment = () => {
        setIsLoading(true)
        requestPay(phone, 2).then((data) => {
            if (data == true) {
                setUserData(name, phone).then(r => {
                    navigate("/video")
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
        <>

            <Container>

                <Row className="row-grid justify-content-between align-items-center">
                    <Col lg="6">
                        <iframe width="100%" height="385" src="https://www.youtube.com/embed/38eoS5n5N3g"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </Col>
                    <Col className="mb-lg-auto" lg="6">
                        <Card className="card-register">

                            <h4 className="p-4">Preço: 8500Mt</h4>
                            <CardBody>
                                <Form className="form">
                                    <InputGroup
                                        className={classnames({
                                            "input-group-focus": fullNameFocus,
                                        })}
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="tim-icons icon-single-02" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Nome"
                                            value={name}
                                            onChange={(e)=>{
                                                setName(e.target.value)
                                            }}
                                            onFocus={(e) => setFullNameFocus(true)}
                                            onBlur={(e) => setFullNameFocus(false)}
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
                                            placeholder="Numero M-pesa"
                                            type="number"
                                            value={phone}
                                            onChange={(e)=>{
                                                setPhone(e.target.value)
                                            }}
                                            onFocus={(e) => setPasswordFocus(true)}
                                            onBlur={(e) => setPasswordFocus(false)}
                                        />
                                    </InputGroup>
                                    <FormGroup check className="text-left">
                                        <Label check>
                                            <Input type="checkbox" />
                                            <span className="form-check-sign" /> Eu concordo com os{" "}
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                termos e Condições.
                                            </a>
                                            .
                                        </Label>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                {isLoading ? (
                                    <p>Processando</p>
                                ): (
                                    <Button onClick={handlePayment} className="btn-round" color="primary" size="lg">
                                        Processar o Pagamento
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}