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
import {Link, useNavigate, useParams} from "react-router-dom";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import {UserAuth} from "../../context/AuthContext";
import {getUserByUid, setUser} from "../../data/providers";
import {requestPay} from "../../utils/utils";
import RegisterComp from "./RegisterComp";
import AcessButton from "./AcessButton";
import CustomTab from "../IndexSections/CustomTab";
import VideoCourse from "./VideoCourse";
import PaymentFinalEbook2 from "./ebook2/PaymentFinalEbook2";

export default function RegisterPageFree() {

  const { user } = UserAuth();
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [shouldAccess, setShouldAccess] = useState(false)
  const [course, setCourse] = React.useState({name: "Curso", price: 10, id: -1});
  const { id } = useParams();

  const updateCourse = () => {
    console.log("ID: "+id)
    if (id == 1) {
      setCourse({
        price: 1, //
        name: "Curso completo",
        id: 1
      })

    } else if (id == 2) {
      setCourse({
        price: 1,
        name: "Módulo 01",
        id: 2
      })
    } else if (id == 3) {
      setCourse({
        price: 1,
        name: "Curso de Chaveiros a Base de Madeira",
        id: 3
      })
    } else {
      setCourse({
        price: 1,
        name: "Curso de Chaveiros a Base de Madeira",
        id: 3
      })
    }
  };

  useEffect(() => {

    updateCourse()
  }, [id])


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
        <div className="wrapper">
          {/*<PageHeader/>*/}
          <div className="main">
            <div className="section section-nucleo-icons">
              <img alt="..." className="path" src={require("assets/img/path3.png")} />
              <Container>


              </Container>
            </div>

            <RegisterComp course={course} />

          </div>
        </div>
      </>
  );
}
