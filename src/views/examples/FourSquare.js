import React from "react";
import "../../assets/css/square.css";
export const FourSquareGrid = () => {
    return (
    <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="square">Autodescoberta</div>
                </div>
                <div className="col-md-6">
                    <div className="square">
                        Desenvolvimento de habilidades
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="square">
                        Criando oportunidades
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="square">
                        Exercicios práticos
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FourSquareGrid;
