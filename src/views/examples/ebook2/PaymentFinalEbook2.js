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

// sections for this page/view
import {Button, Col, Container, Row} from "reactstrap";
import {UserAuth} from "../../../context/AuthContext";
import CreateAcountPage from "../CreateAcountPage";
import CustomTab from "../../IndexSections/CustomTab";
import AcessButton from "../AcessButton";
import {getUserByUid} from "../../../data/providers";
import PaymentParcelEbook2 from "./PaymentParcelEbook2";
import CustomTab2 from "./CustomTab2";

export default function PaymentFinalEbook2() {

    const { user } = UserAuth();
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [shouldAccess, setShouldAccess] = useState(false)

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.body.classList.toggle("index-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
        };
    }, []);

    useEffect(()=> {
        if (user == null) {
            return
        }

        const current = getUserByUid(user.uid).then((data) => {
            setUserData(data)

            if (data.status == "aproved") {
                setShouldAccess(true)
            }
            setIsLoading(false)
        }).catch((e) => {
            setIsLoading(false)
        })
    },[user])


    return (
        <>
            <div className="wrapper">
                {/*<PageHeader/>*/}
                <div className="main">
                    <>
                        {user == null || user == undefined ? (
                            <CreateAcountPage />
                        ) : (
                            <CustomTab2/>
                        )}
                    </>
                </div>
            </div>
        </>
    );
}
