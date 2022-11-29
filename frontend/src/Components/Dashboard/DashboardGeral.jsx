import React, { Component } from 'react';
import Main from '../Template/Main';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


//Carrousel
import Carrousel from '../Carrousel/CarrouselGrafic';


const headerProps = {
    icon: 'database',
    title: 'Geral'
}

export default class DashboardGeral extends Component {
    Card(titulo,numero,cor) {
        return (
            <Card style={{ width: '18rem' }} bg={cor}>
                <Card.Header>
                    <h2 className="text-light d-flex justify-content-center">
                        <strong>{titulo}</strong>
                    </h2>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <h1 className="text-light d-flex justify-content-center">
                            <strong>{numero}</strong>

                        </h1>
                        <p className='text-light d-flex justify-content-center'>Finalizados</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    render() {
        return (
            <Main {...headerProps}>
                <div className='sombra'>
                    <div>
                        <Carrousel />
                    </div>
                </div>
                <div className='d-flex mt-4 justify-content-between'>
                    <div className='sombra mx-1'>
                        <Link to="/DashboardAtendimentoOnSite">
                            {this.Card('Atendimento', 50, 'primary')}
                        </Link>
                    </div>
                    <div className='sombra mx-1'>
                        <Link to="/DashboardContrato">
                            {this.Card('Contrato', 50, 'secondary')}
                        </Link>
                    </div>
                    <div className='sombra mx-1'>
                        <Link to="/DashboardManutencao">
                            {this.Card('Avulso', 50, 'success')}
                        </Link>
                    </div>
                    <div className='sombra mx-1'>
                        <Link to="/DashboardSuporte">
                            {this.Card('Suporte', 50, 'warning')}
                        </Link>
                    </div>
                </div>
            </Main>
        )
    }
}