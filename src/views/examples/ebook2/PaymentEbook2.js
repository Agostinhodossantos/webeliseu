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

export default function PaymentEbook2() {

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
                    <div className="section section-nucleo-icons">
                        <img alt="..." className="path" src={require("assets/img/path3.png")} />
                        <Container>
                            <Row className="justify-content-center mt-3">
                                <Col lg="8" md="12">

                                    <h2 className="title">Descobrindo seu talento e usando-o para ganhar dinheiro</h2>

                                    <h4 className="description mt-2">
                                        Desbloqueie seus talentos ocultos e libere todo o seu
                                        potencial, Descubra seu talento e ganhe muito dinheiro!
                                        Imagine uma vida em que você acorda todos os dias
                                        animado para perseguir sua paixão e ganhar uma renda
                                        lucrativa fazendo o que ama... Não desperdice seus talentos -
                                        aproveite esta oportunidade hoje e comece a viver a vida
                                        que você sempre sonhou!
                                    </h4>
                                    <h4 className="description mt-2">
                                        Imagine a emoção de fazer o que você ama e ganhar uma
                                        fortuna ao fazê-lo! Prepare-se para abraçar um futuro cheio
                                        de alegria, realização e abundância financeira. Não sonhe
                                        apenas com o sucesso, torne-o realidade.
                                    </h4>
                                    <h4 className="description mt-2">
                                        Este e-book custará 1,550Mt, mas você pode reservar por
                                        apenas 600Mt e cebe-lo no dia 05 de Agosto que estará
                                        disponível.
                                    </h4>
                                    <div className="btn-wrapper">
                                        <a href="/checkout">
                                            <Button className="btn" color="warning" size="lg">
                                                Reservar
                                            </Button>
                                        </a>
                                    </div>

                                    <h4 className="description mt-2">
                                        Você está pronto para abrir a porta para a
                                        liberdade financeira? Apresentamos nosso guia
                                        completo sobre como ganhar muito dinheiro
                                        através de vários métodos online! Com nossas
                                        instruções passo a passo e segredos internos,
                                        você adquirirá as habilidades e os
                                        conhecimentos necessários para começar a
                                        obter uma renda estável por meio da Internet.
                                    </h4>
                                    <h4 className="description mt-2">
                                        O conteúdo fornece a todos as habilidades e
                                        conhecimentos necessários para começar a
                                        ganhar uma renda estável através da internet
                                        como eu faço. Este conteúdo irá sair do ar no
                                        dia 04 de Agosto! Não perca tempo e Garanta o
                                        seu E-book.
                                    </h4>
                                    <h4 className="description mt-2">
                                        Prepare-se para transformar sua paixão em
                                        lucro e tornar seus sonhos realidade. Não
                                        espere mais um minuto - comece sua jornada
                                        para a independência financeira hoje!
                                    </h4>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                    {/*{isLoading == false && shouldAccess ? (*/}
                    {/*    <AcessButton/>*/}
                    {/*): (*/}
                    {/*   */}
                    {/*)}*/}
                </div>
            </div>
        </>
    );
}
