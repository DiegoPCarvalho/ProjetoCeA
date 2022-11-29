import React, { Component } from 'react';
import Main from '../Template/Main';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';

const headerProps = {
    icon: 'fort-awesome',
    title: 'Avulso'
}

export default class DashboardManutencaoCorretiva extends Component {
    CardTotalIMpressoras(texto,cor,bgCor, numero, estado) {
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
                        {this.CardTotalIMpressoras('Total Avulso','primary','',50,'Finalizada')}
                     </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Avulso CD'S:</span></p>
                    <div className='d-flex '>
                        <div className='text-light mx-1 sombra'>
                            {this.CardTotalIMpressoras('Leitor RFID','success','',50,'Finalizada')}
                        </div>
                        <div className='text-light mx-1 sombra'>
                            {this.CardTotalIMpressoras('Carregador','success','',50,'Finalizada')}
                        </div>
                        <div className='text-light mx-1 sombra'>
                            {this.CardTotalIMpressoras('Fonte','success','',50,'Finalizada')}
                        </div>
                        <div className='text-light mx-1 sombra'>
                            {this.CardTotalIMpressoras('Leitor LS2208','success','',50,'Finalizada')}
                        </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Avulso Lojas:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Leitor RFID','secondary','',50,'Finalizada')}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Carregador','secondary','',50,'Finalizada')}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Fonte','secondary','',50,'Finalizada')}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Leitor LS2208','secondary','',50,'Finalizada')}</div>
                    </div>
                    <p className='mt-5'><span className='display-6 p-2'>Avulso em Processo:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Aguardando Vistoria','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Em Vistoria','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Vistoriado','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Aguardando Aprovação','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Aguardando Peça','warning','',50)}</div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Aprovado (Separação)','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Aprovado (Manutenção)','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Em Manutenção','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Manutenção Concluida','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Revisão','warning','',50)}</div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Expedição','warning','',50)}</div>
                        <div className='mx-1 sombra'>{this.CardTotalIMpressoras('Finalizada','warning','',50)}</div>
                    </div>

                </div>
            </Main>
        )
    }
}