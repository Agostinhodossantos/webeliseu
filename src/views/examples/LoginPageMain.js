/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import PageHeaderVideo from "../../components/PageHeader/PageHeaderVideo";
import LoginPage from "./LoginPage";
import {UserAuth} from "../../context/AuthContext";
import {Button, Col, Container, Row} from "reactstrap";

export default function LoginPageMain() {

    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
        };
    }, []);
    return (
        <>


            <IndexNavbar />
            <div className="wrapper">
                <div className="section-nucleo-icons">
                    <Container>
                        <br/> <br/> <br/> <br/> <br/> <br/>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <h2 className="title">Projecto meu negocio</h2>
                                <h4 className="description">
                                    Curso dos Quadros a Base de Madeira disponível!
                                    Faça login com as credencias fornecidas apôs a sua inscrição e inicie com as aulas
                                </h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="main">
                    <LoginPage />
                </div>
                <div className="section section-nucleo-icons">
                    <img alt="..." className="path" src={require("assets/img/path3.png")} />
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">

                                <h3 className="title">Aprenda a Ganhar Dinheiro pela Internt em Metical!</h3>
                                {/*<h4 className="description">*/}
                                {/*    Os proximos segundos podem ser o ponto de partida para a mudança da sua vida  de uma vez por todas.  Este conteúdo foi desenvolvido para pessoas que desejam aprender como ganhar dinheiro  em metical como faço por meio de vários métodos online. O conteúdo  fornece a todos as habilidades e conhecimentos necessários para começar a ganhar uma renda estável através da internet como eu faço. Este conteúdo irá sair do ar em breve! Não perca tempo e Garanta o seu E-book.*/}
                                {/*</h4>*/}
                                <div className="btn-wrapper">
                                    <img alt="..." src={require("assets/img/book.jpg")} />
                                </div>
                            </Col>

                        </Row>
                                <Row className="justify-content-center align-items-center">
                                  <a href="/payment-page">
                                    <Button className="btn" color="warning" size="lg">
                                        Começar agora
                                    </Button>
                                  </a>
                                </Row>

                    </Container>
                </div>
            </div>
        </>
    );
}
