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

export default function RegisterPage() {

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

      if (data.isPaidVideo == true) {
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
            <RegisterComp/>
        )}

        <br/> <br/>
        {/*<div className="section-nucleo-icons">*/}
        {/*  <Container>*/}
        {/*    <Row className="justify-content-center align-items-center">*/}
        {/*      <Col lg="8" md="12" className="justify-content-center">*/}
        {/*        <h4 className="description" color="red">*/}
        {/*          Aprenda a Ganhar Dinheiro pela Internet através do Metical*/}
        {/*        </h4>*/}
        {/*        <Row className="justify-content-center align-items-center">*/}
        {/*          <a href="/payment-page">*/}
        {/*            <Button className="btn" color="warning" size="lg">*/}
        {/*              Comecar agora*/}
        {/*            </Button>*/}
        {/*          </a>*/}
        {/*        </Row>*/}
        {/*      </Col>*/}
        {/*    </Row>*/}
        {/*  </Container>*/}
        {/*</div>*/}
      </div>
      </>
  );
}
