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
import React, {useEffect, useState} from "react";

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
import {getUserByUid} from "../../data/providers";

export default function LoginPageMain() {

    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
        };
    }, []);
    const { user } = UserAuth();
    const [userData, setUserData] = useState(null)

    useEffect(()=> {
        if (user == null) {
            return
        }

       try {
           const current = getUserByUid(user.uid).then((data) => {
               setUserData(data)

               console.log(data)
           }).catch((e) => {
           })
       } catch (e) {
           
       }
    },[user])












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
                                    Curso dos Quadros a Base de Madeira
                                </h2>
                                <h4 className="description">
                                    Descubra o fascinante mundo da arte em madeira e dê vida às suas paredes com quadros únicos e encantadores. Nosso curso exclusivo oferece passo a passo detalhado, desde a escolha da madeira até as técnicas de pintura e acabamento.
                                </h4>
                            </Col>

                            <img alt="..." className="cover-image" src={require("assets/img/square_of.jpeg")} />
                        </Row>
                        <Row className="justify-content-center align-items-center mt-3" >
                            <a href="/modules">
                                <Button className="btn" color="warning" size="lg">
                                    Começar agora
                                </Button>
                            </a>
                        </Row>
                    </Container>

                </div>



                <div className="section section-nucleo-icons">
                    <img alt="..." className="path" src={require("assets/img/path3.png")} />
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">

                                <h3 className="title"> Desperte sua criatividade com o Curso de Chaveiros</h3>
                                <h4 className="description">
                                    Não perca a oportunidade de transformar chaves comuns em acessórios extraordinários. Matricule-se agora no Curso de Chaveiros Artesanais e descubra o prazer de criar algo único a cada fechadura!
                                </h4>
                                <div className="btn-wrapper">
                                    {/*<img alt="..." src={require("assets/img/book.jpg")} />*/}
                                    <img alt="..." className="cover-image" src={require("assets/img/keys.jpg")} />

                                </div>
                            </Col>

                        </Row>
                        <Row className="justify-content-center align-items-center">
                            <a href={userData !== null && (userData.courseId === 3 || userData.courseId === 1) ? "/video" : "/register-page/3"}>
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