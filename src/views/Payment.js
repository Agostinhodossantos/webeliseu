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
import PageHeaderVideo from "../components/PageHeader/PageHeaderVideo";
import {Container} from "reactstrap";
import CustomTab from "./IndexSections/CustomTab";
import {UserAuth} from "../context/AuthContext";
import {getUserByUid} from "../data/providers";
import AcessButton from "./examples/AcessButton";
import CreateAcountPage from "./examples/CreateAcountPage";

export default function Payment() {

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
            <IndexNavbar />
            <div className="wrapper">
                {/*<PageHeader/>*/}
                <div className="main">
                    <NucleoIcons />
                    {isLoading == false && shouldAccess ? (
                        <AcessButton/>
                    ): (
                         <>
                             {/*{user == null || user == undefined ? (*/}
                             {/*    <CreateAcountPage />*/}
                             {/*) : (*/}
                             {/*    <CustomTab/>*/}
                             {/*)}*/}
                         </>
                    )}
                </div>
            </div>
        </>
    );
}
