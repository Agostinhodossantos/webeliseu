import React from "react";
import {UserAuth} from "../../context/AuthContext";
import {Link, useNavigate, useParams} from "react-router-dom";
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


export default function RegisterComp({course}) {
    const [fullNameFocus, setFullNameFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);
    const [phoneFocus, setPhoneFocus] = React.useState(false);

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const { user, loginWithEmail, authWithEmail,   } = UserAuth();


    const navigate = useNavigate();


    const setUserData = async (uid) => {

        const userData = {
            uid: uid,
            courseId: course.id,
            courseName: course.name,
            type: "unique",
            username: name,
            phone: phone,
        }

        await setUser(userData)
    }

    const handlePayment = async () => {

        if (password.length < 6) {
            alert("Password deve ter mais de 6 digitos")
            return
        }

        setIsLoading(true)

        if (course.price == 1) {
            const result = await authWithEmail(email, password)
            const current = result.user;

            setUserData(current.uid).then(r => {
                navigate("/video")
            })
        } else {
            requestPay(phone, course.price).then(async (data) => {
                if (data == true) {

                    const result = await authWithEmail(email, password)
                    const current = result.user;

                    setUserData(current.uid).then(r => {
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

    }

    return (
        <>

            <div className="section section-tabs">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="10" xl="6">

                            <Card className="card-register">

                                <h4 className="p-4">Preço: {course.price},  {course.name}</h4>

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
                                                "input-group-focus": emailFocus,
                                            })}
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="tim-icons icon-single-02" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e)=>{
                                                    setEmail(e.target.value)
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
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e)=>{
                                                    setPassword(e.target.value)
                                                }}
                                                onFocus={(e) => setPasswordFocus(true)}
                                                onBlur={(e) => setPasswordFocus(false)}
                                            />
                                        </InputGroup>

                                        <InputGroup
                                            className={classnames({
                                                "input-group-focus": phoneFocus,
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
                                                onFocus={(e) => setPhoneFocus(true)}
                                                onBlur={(e) => setPhoneFocus(false)}
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
            </div>
        </>
    )
}
