import React from "react";
import {Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import PaymentParcel from "../PaymentParcel";
import PaymentOne from "../PaymentOne";
import PaymentParcelEbook2 from "./PaymentParcelEbook2";
import PaymentOne2 from "./PaymentOne2";

export default function CustomTab2() {
    const [iconTabs, setIconsTabs] = React.useState(1);
    const [textTabs, setTextTabs] = React.useState(4);
    return (
        <div className="section section-tabs">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="10" xl="6">
                        <Card>
                            <CardHeader>
                                <Nav className="nav-tabs-info" role="tablist" tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: iconTabs === 1,
                                            })}
                                            onClick={(e) => setIconsTabs(1)}
                                            href="#pablo"
                                        >
                                            <i className="tim-icons icon-spaceship" />
                                            Pagamento em prestação
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: iconTabs === 2,
                                            })}
                                            onClick={(e) => setIconsTabs(2)}
                                            href="#pablo"
                                        >
                                            <i className="tim-icons icon-settings-gear-63" />
                                            Pagamento Unico
                                        </NavLink>
                                    </NavItem>

                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                                    <TabPane tabId="link1">
                                        <PaymentParcelEbook2 />
                                    </TabPane>
                                    <TabPane tabId="link2">
                                        <PaymentOne2 />
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
