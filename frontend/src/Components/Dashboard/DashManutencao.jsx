import React, { Component } from 'react';
import Main from '../Template/Main';
import './Dashboard.css';

import ModalGeral from './ModalGeral';

import GraficoGeral from './GraficoGeral';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

const headerProps = {
    icon: 'fort-awesome',
    title: 'Avulso'
}

export default class DashboardManutencaoCorretiva extends Component {
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
            { name: 'Leitor RFID', value: 10 },
            { name: 'Carregador', value: 4 },
            { name: 'Fonte', value: 4 },
            { name: 'LS2208', value: 30 }
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
                                        nome1="Leitor RFID" i1={30}
                                        nome2="LS2208" i2={90}
                                        nome3="Carregador" i3={10}
                                        nome4="Fonte" i4={5}
                                    />}
                            />
                        </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Avulso CD'S:</span></p>
                    <div className='d-flex '>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="Leitor RFID" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="Carregador" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="Fonte" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral
                                nome="LS2208" qtd="50" situacao="Finalizada"
                                corModal="success" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Avulso Lojas:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Leitor RFID" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Carregador" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Fonte" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="LS2208" qtd="50" situacao="Finalizada"
                                corModal="secondary" estilo={{ height: 187, width: 300 }}
                                relatorio={this.renderGrafico()}
                            />
                        </div>
                    </div>
                    <p className='mt-5'><span className='display-6 p-2'>Avulso em Processo:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Aguardando Vistoria" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Aguardando Vistoria')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Em Vistoria" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Em Vistoria')}
                            />
                        </div>
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Vistoria" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Vistoria')}
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
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Aprovado (Separação)" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Aprovado (Separação)')}
                            />
                        </div>
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
                    </div>
                    <div className="d-flex text-light mt-2">

                        <div className='mx-1 sombra'>
                        <ModalGeral
                                nome="Expedição" qtd="50"
                                corModal="warning" estilo={{ height: 163, width: 250 }}
                                relatorio={this.renderGrafico2('', 'Expedição')}
                            />
                        </div>
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