import React, { Component } from 'react';
import Main from '../Template/Main';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';
import ModalAtendimento from './ModalAtendimento';

const headerProps = {
    icon: 'university',
    title: 'Contrato'
}

export default class DashboardContrato extends Component {
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
                        {this.Card('Total Contrato','primary','',50,'Finalizada')}
                        {/* <ModalAtendimento /> */}
                     </div>
                    </div>
                    
                    <p className='my-4'><span className='display-6 p-2'>Contrato CD'S:</span></p>
                    <div className='d-flex '>
                        <div className='text-light mx-1 sombra'>
                        {this.Card('TC51','success','',50,'Finalizada')}
                        </div>
                        <div className='text-light mx-1 sombra'>
                            {this.Card('TC56','success','',50,'Finalizada')}
                        </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Contrato Lojas:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>{this.Card('TC51','secondary','',50,'Finalizada')}</div>
                        <div className='mx-1 sombra'>{this.Card('TC56','secondary','',50,'Finalizada')}</div>
                    </div>
                    <p className='mt-5'><span className='display-6 p-2'>Contrato em Processo:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>{this.Card('Aguardando Chegar','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Aguardando Vistoria','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Aguardando Aprovação','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Aguardando Peça','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Aprovado (Separação)','warning','',50)}</div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>{this.Card('Aprovado (Manutenção)','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Em Manutenção','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Manutenção Concluida','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Revisão','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Expedição','warning','',50)}</div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>{this.Card('Finalizada','warning','',50)}</div>
                    </div>

                </div>
            </Main>
        )
    }
}