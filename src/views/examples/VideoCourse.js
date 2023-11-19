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
import {getBaseUrl, getRandomNum, requestPay} from "../../utils/utils";
import {UserAuth} from "../../context/AuthContext";
import {getUserByUid, setUser} from "../../data/providers";
import axios from "axios";
import ReactPlayer from "react-player";
import AcessButton from "./AcessButton";
import RegisterComp from "./RegisterComp";


export default function VideoCourse() {

    const [isLoading, setIsLoading] = React.useState(true);
    const [current, setCurrentUser] = React.useState({});

    const { user } = UserAuth();

    const navigate = useNavigate();

    useEffect(() => {

        if (user != null) {
            var data = getUserByUid(user.uid).then(data => {

                console.log("Data: "+data)

                if (data != null) {
                    setCurrentUser(data)
                    setIsLoading(false)
                }
            }).catch(e => {
                console.log("Data error: "+e)

                setIsLoading(false)

                alert(e)
            })
        }

    }, [user])

    return (
        <div className="section">
            <Container>

                {isLoading == true ? (
                    <div>Processando</div>
                ): (

                    <Row className="justify-content-center align-items-center">

                        {current.courseId == 1 ? (
                            <>
                                <iframe width="660" height="415" src="https://www.youtube.com/embed/MvCacTrHqRI?si=2JYREo_8CKxxBmN2"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>


                                <iframe width="660" height="415" src="https://www.youtube.com/embed/0aUhe2gkLu8?si=0aUhe2gkLu8"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>


                                <iframe width="660" height="415" src="https://www.youtube.com/embed/qh-_qR29dOs?si=qh-_qR29dOs"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </>
                        ): (
                            <>
                            </>
                        )}

                        {current.courseId == 2 ? (
                            <>

                                <iframe width="660" height="415" src="https://www.youtube.com/embed/0aUhe2gkLu8?si=0aUhe2gkLu8"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </>
                        ) : (
                            <>
                            </>
                        )}


                        {current.courseId == 3 ? (
                            <>
                                <iframe width="660" height="415" src="https://www.youtube.com/embed/qh-_qR29dOs?si=qh-_qR29dOs"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </>
                        ) : (
                            <>
                            </>
                        )}

                            </Row>
                )}

            </Container>
        </div>
    );
}
