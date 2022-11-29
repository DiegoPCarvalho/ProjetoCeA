import React, { Component } from 'react';
import Main from '../Template/Main';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';

const headerProps = {
    icon: 'fort-awesome',
    title: 'Avulso'
}

export default class DashboardManutencaoCorretiva extends Component {
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
                        {this.Card('Total Avulso','primary','',50,'Finalizada')}
                     </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Avulso CD'S:</span></p>
                    <div className='d-flex '>
                        <div className='text-light mx-1 sombra'>
                            {this.Card('Leitor RFID','success','',50,'Finalizada')}
                        </div>
                        <div className='text-light mx-1 sombra'>
                            {this.Card('Carregador','success','',50,'Finalizada')}
                        </div>
                        <div className='text-light mx-1 sombra'>
                            {this.Card('Fonte','success','',50,'Finalizada')}
                        </div>
                        <div className='text-light mx-1 sombra'>
                            {this.Card('Leitor LS2208','success','',50,'Finalizada')}
                        </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Avulso Lojas:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>{this.Card('Leitor RFID','secondary','',50,'Finalizada')}</div>
                        <div className='mx-1 sombra'>{this.Card('Carregador','secondary','',50,'Finalizada')}</div>
                        <div className='mx-1 sombra'>{this.Card('Fonte','secondary','',50,'Finalizada')}</div>
                        <div className='mx-1 sombra'>{this.Card('Leitor LS2208','secondary','',50,'Finalizada')}</div>
                    </div>
                    <p className='mt-5'><span className='display-6 p-2'>Avulso em Processo:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>{this.Card('Aguardando Vistoria','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Em Vistoria','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Vistoriado','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Aguardando Aprovação','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Aguardando Peça','warning','',50)}</div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>{this.Card('Aprovado (Separação)','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Aprovado (Manutenção)','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Em Manutenção','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Manutenção Concluida','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Revisão','warning','',50)}</div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        
                        <div className='mx-1 sombra'>{this.Card('Expedição','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Finalizada','warning','',50)}</div>
                    </div>

                </div>
            </Main>
        )
    }
}