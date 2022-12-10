import React, { Component } from 'react';
import Main from '../Template/Main';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';

import ModalGeral from './ModalGeral';

import GraficoGeral from './GraficoGeral';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

const headerProps = {
    icon: 'info-circle',
    title: 'Help Desk'
}

export default class DashboardSuporteRemoto extends Component {
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

    renderGrafico(titulo) {
        const myData = [
            { name: '2018', value: 10 },
            { name: '2019', value: 4 },
            { name: '2020', value: 8 },
            { name: '2021', value: 9 },
            { name: '2022', value: 10 },
        ]

        const dados = {
            chart: {
                type: 'column'
            },
            title: {
                text: titulo
            },
            xAxis: {
                categories: myData.map(x => x.name),
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Ano',
                data: myData.map(x => x.value)
            }]
        }

        return (
            <HighChartsReact highcharts={HighCharts} options={dados} />
        )
    }

    renderGrafico2(titulo, varia) {
        const myData = [
            { name: 'TC51', value: 10 },
            { name: 'TC56', value: 4 }
        ]

        const dados = {
            chart: {
                type: 'column'
            },
            title: {
                text: titulo
            },
            xAxis: {
                categories: myData.map(x => x.name),
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: varia,
                data: myData.map(x => x.value)
            }]
        }

        return (
            <HighChartsReact highcharts={HighCharts} options={dados} />
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                <div className='master'>
                    <div className='d-flex text-light'>
                        <div className='sombra'>
                            <ModalGeral
                                nome="Total" qtd="50" situacao="Finalizada"
                                corModal="primary" estilo={{ height: 180, width: 300 }}
                                relatorio={
                                    <GraficoGeral tipo="pie"
                                        nome1="TC51" i1={30}
                                        nome2="TC56" i2={60}
                                        nome3="Leitor RFID" i3={20}
                                        nome4="LS2208" i4={25}
                                        nome5="ZT230" i5={25}
                                        nome6="S4M" i6={10}
                                        nome7="Alegro 4206" i7={30}
                                        nome8="SD360" i8={50}
                                        nome9="ZM400" i9={5}
                                    />}
                            />
                        </div>
                    </div>

                    <p className='my-4'><span className='display-6 p-2'>Suporte CD'S:</span></p>
                    <div className='d-flex '>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="TC51" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="TC56" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="S4M" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="ZT230" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="ZM400" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="Alegro 4206" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="Leitor RFID" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="LS2208" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Suporte Lojas:</span></p>
                    <div className='d-flex '>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="TC51" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="TC56" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="S4M" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="ZT230" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="SD360" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="Alegro 4206" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="Leitor RFID" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="LS2208" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 150, width: 250 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                    </div>
                    <p className='mt-5'><span className='display-6 p-2'>Suporte em Processo:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Abertura de Suporte" qtd="50"
                                corModal="warning" estilo={{ height: 180, width: 300 }}
                                relatorio={this.renderGrafico2('', 'Abertura de Suporte')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Aguardando Vistoria" qtd="50"
                                corModal="warning" estilo={{ height: 180, width: 300 }}
                                relatorio={this.renderGrafico2('', 'Aguardando Vistoria')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Em Atendimento" qtd="50"
                                corModal="warning" estilo={{ height: 180, width: 300 }}
                                relatorio={this.renderGrafico2('', 'Em Atendimento')}
                            />
                        </div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Manutenção Concluída" qtd="50"
                                corModal="warning" estilo={{ height: 180, width: 300 }}
                                relatorio={this.renderGrafico2('', 'Manutenção Concluída')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Expedição" qtd="50"
                                corModal="warning" estilo={{ height: 180, width: 300 }}
                                relatorio={this.renderGrafico2('', 'Expedição')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Finalizada" qtd="50"
                                corModal="warning" estilo={{ height: 180, width: 300 }}
                                relatorio={this.renderGrafico2('', 'Finalizada')}
                            />
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}