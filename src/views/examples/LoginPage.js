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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../../context/AuthContext";


export default function LoginPage() {
  const { user, loginWithEmail } = UserAuth();

  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (user != null) {
       // navigate('/register-page', { replace: true });
    }
  },[user])


  const handleLogin = async () => {
    if (email == '' || password == '') {
      alert("Todos os campos devem ser preechidos")
      return
    }

    try {
      await loginWithEmail(email, password)
    } catch (e) {
      alert(e)
      console.log(e)
    }
  }

  return (
      <div className="">
        <Container>

          <Row className="justify-content-center align-items-center">
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">

                <CardBody>
                  <h4>Login</h4>
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
                          placeholder="Email"
                          type="text"
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
                          type="password"
                          value={password}
                          onChange={(e)=>{
                            setPassword(e.target.value)
                          }}
                          onFocus={(e) => setPasswordFocus(true)}
                          onBlur={(e) => setPasswordFocus(false)}
                      />
                    </InputGroup>
                    <FormGroup check className="text-left">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />Estou de acordo com{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          termos e Condições
                        </a>
                        .
                      </Label>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Row className="justify-content-center align-items-center">
                    <Button onClick={handleLogin} className="btn-default" color="primary" size="lg">
                      Continuar
                    </Button>
                  </Row>

                </CardFooter>
              </Card>
            </Col>
            <div className="section-nucleo-icons">
              <Container>
                <Row className="justify-content-center align-items-center">
                  <Col lg="8" md="12" className="justify-content-center">
                    <h4 className="description">
                      Se você não possui credências, clique no link abaixo para fazer a sua inscrição e em seguida irá recber as credencias para ter acesso ao curso.
                    </h4>
                    <Row className="justify-content-center align-items-center">
                      <a href="https://tranquil-torte-647ed0.netlify.app">
                        Fazer inscrição
                      </a>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </Row>
        </Container>
      </div>
  );
}
