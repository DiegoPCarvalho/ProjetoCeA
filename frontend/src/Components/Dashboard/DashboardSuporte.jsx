import React, { Component } from 'react';
import Main from '../Template/Main';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';

const headerProps = {
    icon: 'info-circle',
    title: 'Help Desk'
}

export default class DashboardSuporteRemoto extends Component {
    Card(texto,cor,bgCor, numero, estado) {
        return (
            <Card border={bgCor} bg={cor} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='mt-2 d-flex justify-content-center'><strong>{texto}</strong></Card.Title>
                    <Card.Text className='d-flex justify-content-center'>
                        <h1><strong>{numero}</strong></h1>
                    </Card.Text>
                        <p className='d-flex justify-content-center'>{estado}</p>
                </Card.Body>
            </Card>
        )
    }
    
    render() {
        return (
            <Main {...headerProps}>
                <div className='master'>
                    <div className='d-flex text-light'>
                        <div className='sombra'>
                        {this.Card('Total Suporte','primary','',50,'Finalizada')}
                     </div>
                    </div>
                    
                    <p className='my-4'><span className='display-6 p-2'>Suporte CD'S:</span></p>
                    <div className='d-flex '>
                        <div className='text-light mx-1 sombra'>{this.Card('TC51','success','',50,'Finalizada')}</div>
                        <div className='text-light mx-1 sombra'>{this.Card('TC56','success','',50,'Finalizada')}</div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Suporte Lojas:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>{this.Card('TC51','secondary','',50,'Finalizada')}</div>
                        <div className='mx-1 sombra'>{this.Card('TC56','secondary','',50,'Finalizada')}</div>
                    </div>
                    <p className='mt-5'><span className='display-6 p-2'>Suporte em Processo:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>{this.Card('Abertura Suporte','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Aguardando Vistoria','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Em Atendimento','warning','',50)}</div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>{this.Card('Manutenção Concluida','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Expedição','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Finalizada','warning','',50)}</div>
                    </div>
                </div>
            </Main>
        )
    }
}