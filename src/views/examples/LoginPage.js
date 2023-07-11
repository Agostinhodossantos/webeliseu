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
       navigate('/payment-page', { replace: true });
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
      <div className="section section-signup">
        <Container>

          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                Projecto Meu Negócio{" "}
              </h3>

              <p className="text-white mb-3">
                Curso dos Quadros a Base de Madeira disponível!
                Faça login com as credencias fornecidas apôs a sua inscrição e inicie com as aulas
              </p>
              <div className="btn-wrapper">
                <Button color="primary" to="https://tranquil-torte-647ed0.netlify.app" tag={Link}>
                  Nao tenho conta
                </Button>
              </div>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
                <CardHeader>
                  <CardImg
                      alt="..."
                      src={require("assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4">Login</CardTitle>
                </CardHeader>
                <CardBody>
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
                  <Button onClick={handleLogin} className="btn-round" color="primary" size="lg">
                    Continuar
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}
