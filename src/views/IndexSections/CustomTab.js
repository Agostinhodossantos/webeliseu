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
import classnames from "classnames";
// reactstrap components
import {
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import LoginPage from "../examples/LoginPage";
import PaymentOne from "../examples/PaymentOne";
import PaymentParcel from "../examples/PaymentParcel";

export default function CustomTab() {
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
                                        <PaymentParcel />
                                    </TabPane>
                                    <TabPane tabId="link2">
                                        <PaymentOne />
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
