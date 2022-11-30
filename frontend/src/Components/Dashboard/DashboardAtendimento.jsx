import React, { Component } from 'react';
import Main from '../Template/Main';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const headerProps = {
    icon: 'plane',
    title: 'Atendimento On-site'
}

export default class DashAtendimentoOnSite extends Component {

    state = { isOpen: false }

    openModal = () => this.setState({ isOpen: true })
    closeModal = () => this.setState({ isOpen: false })

    renderModal() {
        return (
            <>
                    <Button variant="primary" onClick={this.openModal}>
                        Launch demo modal
                    </Button>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    Card(texto, cor, bgCor, numero, estado) {
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
                            {this.Card('Total Atendimento', 'primary', '', 50, 'Finalizada')}
                            {/* {this.renderModal()} */}
                        </div>
                    </div>

                    <p className='my-4'><span className='display-6 p-2'>Atedimento CD'S:</span></p>
                    <div className='d-flex '>
                        <div className='text-light mx-1 sombra'>
                            {this.Card('ZT230', 'success', '', 50, 'Finalizada')}
                        </div>
                        <div className='text-light mx-1 sombra'>
                            {this.Card('ZM400', 'success', '', 50, 'Finalizada')}
                        </div>
                        <div className='text-light mx-1 sombra'>
                            {this.Card('QLN420', 'success', '', 50, 'Finalizada')}
                        </div>
                        <div className='text-light mx-1 sombra'>
                            {this.Card('S4M', 'success', '', 50, 'Finalizada')}
                        </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Atedimento Lojas:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>{this.Card('ZT230', 'secondary', '', 50, 'Finalizada')}</div>
                        <div className='mx-1 sombra'>{this.Card('SD360', 'secondary', '', 50, 'Finalizada')}</div>
                        <div className='mx-1 sombra'>{this.Card('ALEGRO 4206', 'secondary', '', 50, 'Finalizada')}</div>
                    </div>
                    <p className='mt-5'><span className='display-6 p-2'>Atendimento em Processo:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>{this.Card('Aguardando Vistoria', 'warning', '', 50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Vistoriado', 'warning', '', 50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Aguardando Aprovação', 'warning', '', 50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Aprovado', 'warning', '', 50)}</div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>{this.Card('Em Manutenção', 'warning', '', 50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Manutenção Concluida', 'warning', '', 50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Expedição', 'warning', '', 50)}</div>
                        <div className='mx-1 sombra'>{this.Card('Finalizada', 'warning', '', 50)}</div>
                    </div>

                </div>
            </Main>
        )
    }
}