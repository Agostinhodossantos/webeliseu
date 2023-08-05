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

            <h2 className="title">Aprenda a Ganhar Dinheiro pela Internet em metical!</h2>
            <h4 className="description">
              Você está pronto para abrir a porta para a liberdade financeira? Apresentamos nosso guia completo sobre como ganhar muito dinheiro através de vários métodos online! Com nossas instruções passo a passo e segredos internos, você adquirirá as habilidades e os
              conhecimentos necessários para começar a obter uma renda estável por meio da Internet. <br/> <br/>
              O conteúdo fornece a todos as habilidades e conhecimentos necessários para começar a ganhar uma renda estável através da internet como eu faço. Este conteúdo irá sair do ar no dia 04 de Agosto! Não perca tempo e Garanta o seu E-book.
              Prepare-se para transformar sua paixão em lucro e tornar seus sonhos realidade. <br/> Não espere mais um minuto - comece sua jornada para a independência financeira hoje!

            </h4>
            <div className="btn-wrapper">
              <img alt="..." src={require("assets/img/book.jpg")} />
            </div>
            <h4 className="description" style={{ color: '#FF7A00' }}>
              Eu Avisei! Você chegou tarde, e o seu tempo acabou. Infelizmente o ebook onde ensino os 4 Passos para iniciar a ganhar dinheiro na internet em metical está definitivamente indisponível. Talvez eu possa trazê-lo de volta, talvez. Algumas oportunidades aparecem uma vez e nunca voltam
            </h4>
          </Col>
        </Row>

      </Container>
    </div>
  );
}
