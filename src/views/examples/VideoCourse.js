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
                    <ReactPlayer controls url='https://www.youtube.com/watch?v=QPfTn5kfuM' />
                </Row>
            </Container>
        </div>
    );
}
