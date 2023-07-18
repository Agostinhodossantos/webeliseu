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


export default function CreateAcountPage() {
  const { user, loginWithEmail, authWithEmail } = UserAuth();

  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();


  const handleLogin = async () => {
    if (email == '' || password == '') {
      alert("Todos os campos devem ser preechidos")
      return
    }

    setIsLoading(true)
    try {
      await authWithEmail(email, password)
      navigate('/payment-page', { replace: true });
    } catch (e) {
        setIsLoading(false)
      alert(e)

      console.log(e)
    }
  }

  return (
      <div className="section">
        <Container>

          <Row className="justify-content-center align-items-center">

            <Col className="mb-lg-auto" lg="6">

              <Card className="card-register">
                <br/>
                <CardBody>
                  <h4>Criar conta</h4>
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
                    {isLoading ? (
                        <Button className="btn-round" color="primary" type="button">
                            <div className="loader loader-sm"/>
                        </Button>
                    ):(
                        <Button onClick={handleLogin} className="btn-default" color="primary" size="lg">
                          Continuar
                        </Button>
                    )}
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}
