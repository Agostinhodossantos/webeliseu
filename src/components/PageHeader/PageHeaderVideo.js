import {Container} from "reactstrap";
import React from "react";

export default function PageHeaderVideo() {
    return (
        <div className="page-header header-filter">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6" />
            <div className="squares square7" />
            <div className="squares square7" />
            <Container>
                <div className="content-center brand">

                    <div className="d-sm-block">
                        <iframe width="100%" height="335" src="https://www.youtube.com/embed/zo9dJFo8H8g"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </Container>
        </div>
    );
}
