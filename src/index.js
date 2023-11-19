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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import LoginPage from "./views/examples/LoginPage";
import Payment from "./views/Payment";
import LoginPageMain from "./views/examples/LoginPageMain";
import {AuthContextProvider} from "./context/AuthContext";
import MyPdfView from "./views/examples/MyPdfView";
import VideoCourse from "./views/examples/VideoCourse";
import CreateAcountPage from "./views/examples/CreateAcountPage";
import PaymentEbook2 from "./views/examples/ebook2/PaymentEbook2";
import PaymentFinalEbook2 from "./views/examples/ebook2/PaymentFinalEbook2";
import ModulesPage from "./views/examples/Modules";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AuthContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/components" element={<Index />} />
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/register-page/:id" element={<RegisterPage />} />
                <Route path="/" element={<LoginPageMain />} />
                <Route path="/modules" element={<ModulesPage />} />
                <Route path="/payment-page" element={<Payment />} />
                <Route path="/ebook" element={<PaymentEbook2 />} />
                <Route path="/checkout" element={<PaymentFinalEbook2 />} />
                <Route path="/profile-page" element={<ProfilePage />} />
                <Route path="/pdf" element={<MyPdfView />} />
                <Route path="/video" element={<VideoCourse />} />
                <Route path="/register" element={<CreateAcountPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    </AuthContextProvider>
);
