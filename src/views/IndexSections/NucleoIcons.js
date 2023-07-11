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
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">

            <h2 className="title">Aprenda a Ganhar Dinheiro pela Internt em metical Metical!</h2>
            <h4 className="description">
              Os proximos segundos podem ser o ponto de partida para a mudança da sua vida  de uma vez por todas.  Este conteúdo foi desenvolvido para pessoas que desejam aprender como ganhar dinheiro  em metical como faço por meio de vários métodos online. O conteúdo  fornece a todos as habilidades e conhecimentos necessários para começar a ganhar uma renda estável através da internet como eu faço. Este conteúdo irá sair do ar em breve! Não perca tempo e Garanta o seu E-book.
            </h4>
            <div className="btn-wrapper">
              <img alt="..." src={require("assets/img/book.jpg")} />
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}
