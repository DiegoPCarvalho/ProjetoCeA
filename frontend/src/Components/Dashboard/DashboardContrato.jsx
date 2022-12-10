import React, { Component } from 'react';
import Main from '../Template/Main';

import './Dashboard.css';
import ModalGeral from './ModalGeral';

import GraficoGeral from './GraficoGeral';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

const headerProps = {
    icon: 'university',
    title: 'Contrato'
}

export default class DashboardContrato extends Component {

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
                                    <GraficoGeral tipo="pie" nome1="TC51"
                                        nome2="TC56" i1={30} i2={60}
                                    />}
                            />
                        </div>
                    </div>

                    <p className='my-4'><span className='display-6 p-2'>Contrato CD'S:</span></p>
                    <div className='d-flex '>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="TC51" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="TC56" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Contrato Lojas:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="TC51" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="TC56" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                    </div>
                    <p className='mt-5'><span className='display-6 p-2'>Contrato em Processo:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Aguardando Chegar" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Aguardando Chegar')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Aguardando Vistoria" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Aguardando Vistoria')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Aguardando Aprovação" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Aguardando Aprovação')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Aguardando Peça" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Aguardando Peça')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Aprovado (Separação)" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Aprovado (Separação)')}
                            />
                        </div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Aprovado (Manutenção)" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Aprovado (Manutenção)')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Em Manutenção" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Em Manutenção')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Manutenção Concluída" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Manutenção Concluída')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Revisão" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Revisão')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Expedição" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Expedição')}
                            />
                        </div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>
                            <ModalGeral
                                nome="Finalizada" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Finalizada')}
                            />
                        </div>
                    </div>

                </div>
            </Main>
        )
    }
}