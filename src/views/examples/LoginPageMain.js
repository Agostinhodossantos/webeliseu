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
import {Button, Card, Col, Container, Row} from "reactstrap";
import FourSquareGrid from "./FourSquare";

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
                                <h2 className="title">
                                    Curso dos Quadros a Base de Madeira disponível!
                                </h2>
                                <h4 className="description">
                                    Duração do Curso 3 Meses – De 12 de Julho a 12 de Outubro <br/>
                                    Faça login com as credencias fornecidas apôs a sua inscrição e inicie com as
                                    aulas.
                                </h4>
                            </Col>
                        </Row>
                    </Container>

                    <LoginPage />
                </div>



                <div className="section section-nucleo-icons">
                    <img alt="..." className="path" src={require("assets/img/path3.png")} />
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">

                                <h3 className="title">Aprenda a Ganhar Dinheiro pela Internt em Metical!</h3>
                                <h4 className="description">
                                    E-book disponível – 18 de Julho a 04 de Agosto
                                </h4>
                                <div className="btn-wrapper">
                                    {/*<img alt="..." src={require("assets/img/book.jpg")} />*/}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Y313Yurbqgs"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>
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



                <div className="">
                    <img alt="..." className="path" src={require("assets/img/path3.png")} />
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">

                                {/*<h3 className="title">Descobrindo seu talento e usando-o para ganhar dinheiro</h3>*/}
                                {/*<h4 className="description" style={{ color: "#efae08" }}>*/}
                                {/*    Este E-book foi desenvolvido para ajudá-lo a identificar suas habilidades naturais e aproveitá-las para construir uma carreira de sucesso.*/}
                                {/*    Você aprenderá como reconhecer seus talentos únicos, desenvolvê-los em habilidades comercializáveis e criar oportunidades para si mesmo em vários ramos. Ao final, você terá uma compreensão clara do seu talento, bem como um roteiro para alcançar seus resultados e usa-los para fazer dinheiro.*/}
                                {/*</h4>*/}

                                <div className="btn-wrapper">
                                    <img alt="..." src={require("assets/img/Descobrindo.png")} />
                                </div>
                            </Col>

                        </Row>
                        <Row className="justify-content-center align-items-center mt-3" >
                            <a href="/ebook">
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
