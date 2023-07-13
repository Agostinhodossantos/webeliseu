import React from "react";
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
import {setUser} from "../../data/providers";
import axios from "axios";
import ReactPlayer from "react-player";


export default function VideoCourse() {

    const [isLoading, setIsLoading] = React.useState(false);

    const { user } = UserAuth();

    const navigate = useNavigate();

    return (
        <div className="section">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <iframe id="odysee-iframe" width="660" height="415"
                            src="https://odysee.com/$/embed/Quadros-a-Base-de-Madeira.PMN:b?r=DZwHH8vVY35SRBgdtG4qE8oHabADiM6j&autoplay=true"
                            allowFullScreen></iframe>
                </Row>
            </Container>
        </div>
    );
}
