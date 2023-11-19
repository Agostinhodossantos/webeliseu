import React, {useEffect, useState} from "react";
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
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import {UserAuth} from "../../context/AuthContext";
import {getUserByUid, setUser} from "../../data/providers";
import {requestPay} from "../../utils/utils";
import RegisterComp from "./RegisterComp";
import AcessButton from "./AcessButton";
import CustomTab from "../IndexSections/CustomTab";
import VideoCourse from "./VideoCourse";

export default function ModulesPage() {

    const { user } = UserAuth();
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [shouldAccess, setShouldAccess] = useState(false)

    useEffect(()=> {
        if (user == null) {
            return
        }

        const current = getUserByUid(user.uid).then((data) => {
            setUserData(data)

            console.log(data)

            if (data.courseId == 1 || data.courseId == 2 || data.courseId == 3 || data.courseId == 4 ) {
                setShouldAccess(true)
            }
            setIsLoading(false)
        }).catch((e) => {
            setIsLoading(false)
        })
    },[user])

    return (
        <>
            <IndexNavbar />
            <br/> <br/>
            <div className="section section-signup">

                {isLoading == false && shouldAccess ? (
                    <VideoCourse/>
                ): (
                    <>

                        <Container>

                            <Row className="row-grid justify-content-between align-items-center">
                                <Col className="mb-lg-auto" lg="6">
                                    <Card className="card-register">

                                        <CardBody className="p-4">
                                            <h4 className="">Curso completo</h4>
                                            <h4 className="">5,198Mt</h4>

                                            <p className="text-info">Curso completo + Bônus do Curso de Chaveiros </p>
                                        </CardBody>
                                        <CardFooter>
                                            <a href="/register-page/1">
                                                <Button className="btn-round" color="primary" size="lg">
                                                    Selecionar
                                                </Button>
                                            </a>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col className="mb-lg-auto" lg="6">
                                    <Card className="card-register">

                                        <CardBody className="p-4">
                                            <h4 className="">Pagamento em Prestações</h4>
                                            <h4 className="">2,599Mt</h4>
                                            <p className="text-info">Módulo 01</p>

                                        </CardBody>
                                        <CardFooter>
                                            <a href="/register-page/2">
                                                <Button className="btn-round" color="primary" size="lg">
                                                    Selecionar
                                                </Button>
                                            </a>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </>
                )}
                <br/> <br/>
            </div>
        </>
    );
}
