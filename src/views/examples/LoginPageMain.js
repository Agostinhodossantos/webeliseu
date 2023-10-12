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
                                    Curso dos Quadros a Base de Madeira!
                                </h2>
                                <h4 className="description">
                                Agradecemos a todos que se inscreveram no nosso  Curso dos Quadros a Base de Madeira! As inscrições para esta edição estão oficialmente encerradas
                                </h4>
                            </Col>
                        </Row>
                    </Container>
                </div>


            </div>
        </>
    );
}
