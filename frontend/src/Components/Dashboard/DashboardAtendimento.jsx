import React, { Component } from 'react';
import Main from '../Template/Main';
import './Dashboard.css';
import ModalGeral from './ModalGeral';
import Card from 'react-bootstrap/Card';
import GraficoGeral from './GraficoGeral';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

const headerProps = {
    icon: 'plane',
    title: 'Atendimento On-site'
}

export default class DashAtendimentoOnSite extends Component {

    renderGrafico(titulo){
        const myData = [
            { name: '2018', value: 10 },
            { name: '2019', value: 4 },
            { name: '2020', value: 8 },
            { name: '2021', value: 9 },
            { name: '2022', value: 10 },
          ]
    
          const dados = {
            chart: {
                type:'column'
              },
              title: {
                text: titulo
              },
              xAxis: {
                categories: myData.map( x => x.name),
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
                data: myData.map( x => x.value )
              }]
          }
    
          return(
            <HighChartsReact highcharts={HighCharts} options={dados} />
          )
       }

       renderGrafico2(titulo, varia){
        const myData = [
            { name: 'S4M', value: 10 },
            { name: 'ZM400', value: 4 },
            { name: 'ZT230', value: 8 },
            { name: 'QLN420', value: 9 },
            { name: 'ALEGRO 4206', value: 10 },
            { name: 'SD360', value: 10 }
          ]
    
          const dados = {
            chart: {
                type:'column'
              },
              title: {
                text: titulo
              },
              xAxis: {
                categories: myData.map( x => x.name),
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
                data: myData.map( x => x.value )
              }]
          }
    
          return(
            <HighChartsReact highcharts={HighCharts} options={dados} />
          )
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
                            <ModalGeral nome="Total" qtd="50" situacao="Fizalizada" corModal="primary"
                               estilo={{height: 180, width: 300}} relatorio={
                               <GraficoGeral tipo="pie" 
                                nome1="S4m" i1={10}
                                nome2="SD360" i2={50}
                                nome3="Alegro 4206" i3={30}
                                nome4="ZT230" i4={20}
                               />}/>
                        </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Atedimento CD'S:</span></p>
                    <div className='d-flex '>
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="S4M" qtd="50" situacao="Fizalizada" corModal="success" estilo={{height: 187, width: 300}} relatorio={this.renderGrafico()}/>
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral nome="ZM400" qtd="50" situacao="Fizalizada" corModal="success" estilo={{height: 187, width: 300}} relatorio={this.renderGrafico()}/>
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral nome="QLN420" qtd="50" situacao="Fizalizada" corModal="success" estilo={{height: 187, width: 300}} relatorio={this.renderGrafico()}/>
                        </div>
                        <div className='text-light mx-1 sombra'>
                            <ModalGeral nome="ZT230" qtd="50" situacao="Fizalizada" corModal="success" estilo={{height: 187, width: 300}} relatorio={this.renderGrafico()}/>
                        </div>
                    </div>
                    <p className='my-4'><span className='display-6 p-2'>Atedimento Lojas:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="ZT230" qtd="50" situacao="Fizalizada" corModal="secondary" estilo={{height: 187, width: 300}} relatorio={this.renderGrafico()}/>
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="SD360" qtd="50" situacao="Fizalizada" corModal="secondary" estilo={{height: 187, width: 300}} relatorio={this.renderGrafico()}/>
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="Alegro 4206" qtd="50" situacao="Fizalizada" corModal="secondary" estilo={{height: 187, width: 300}} relatorio={this.renderGrafico()}/>
                        </div>
                    </div>
                    <p className='mt-5'><span className='display-6 p-2'>Atendimento em Processo:</span></p>
                    <div className='d-flex text-light'>
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="Aguardando Vistoria" qtd="50" corModal="warning" estilo={{height: 163, width: 289}} relatorio={this.renderGrafico2('','Aguardando Vistoria')}/>
                        </div>
                        <div className='mx-1 sombra'>
                             <ModalGeral nome="Vistoriado" qtd="50" corModal="warning" estilo={{height: 163, width: 289}} relatorio={this.renderGrafico2('','Vistoriado')}/>
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="Aguardando Aprovação" qtd="50" corModal="warning" estilo={{height: 163, width: 289}} relatorio={this.renderGrafico2('','Aguardando Aprovação')}/>
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="Aprovado" qtd="50" corModal="warning" estilo={{height: 163, width: 289}} relatorio={this.renderGrafico2('','Aprovado')}/>
                        </div>
                    </div>
                    <div className="d-flex text-light mt-2">
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="Em Manutenção" qtd="50" corModal="warning" estilo={{height: 163, width: 289}} relatorio={this.renderGrafico2('','Em Manutenção')}/>
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="Manutenção Concluída" qtd="50" corModal="warning" estilo={{height: 163, width: 289}} relatorio={this.renderGrafico2('','Manutenção Concluida')}/>
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="Expedição" qtd="50" corModal="warning" estilo={{height: 163, width: 289}} relatorio={this.renderGrafico2('','Expedição')}/>
                        </div>
                        <div className='mx-1 sombra'>
                            <ModalGeral nome="Finalizada" qtd="50" corModal="warning" estilo={{height: 163, width: 289}} relatorio={this.renderGrafico2('','Finalizada')}/>
                        </div>
                    </div>

                </div>
            </Main>
        )
    }
}