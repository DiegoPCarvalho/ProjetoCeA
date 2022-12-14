import React, { Component } from "react";
import Main from "../Template/Main";
import MapasAtendimento from "./Mapa";

const HeaderProps = {
    icon: "map",
    title: "Help Desk por Estados"
}
export default class MpAtendimento extends Component {
    render(){
        return(
            <Main {...HeaderProps}>
                <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                        <strong className="h1 text-light bg-dark p-2 rounded">Escolha o Estado</strong>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <MapasAtendimento end="OrdemServico/HelpDesk"/>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <p><span className="bg-danger p-2 rounded"></span><span className="mx-2"><strong>Região Norte</strong></span></p>
                            <p><span className="bg-warning p-2 rounded"></span><span className="mx-2"><strong>Região Nordeste</strong></span></p>
                            <p><span  className="bg-primary p-2 rounded"></span><span className="mx-2"><strong>Região Centro-Oeste</strong></span></p>
                            <p><span className="bg-success p-2 rounded"></span><span className="mx-2"><strong>Região Sudeste</strong></span></p>
                            <p><span style={{background: '#CD853F'}} className="p-2 rounded"></span><span className="mx-2"><strong>Região Sul</strong></span></p>
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}

