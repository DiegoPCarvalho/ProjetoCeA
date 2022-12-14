import React, { Component } from 'react';
import Main from '../Template/Main';
import './Dashboard.css';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';
import ModalGeral from './ModalGeral';
import { Link } from  'react-router-dom';

//Carrousel
// import Carrousel from '../Carrousel/CarrouselGrafic';


const headerProps = {
    icon: 'database',
    title: 'Geral'
}

export default class DashboardGeral extends Component {
   
   renderGrafico2(tipo, titulo){
    const myData = [
        { name: '2018', value: 10 },
        { name: '2019', value: 4 },
        { name: '2020', value: 8 },
        { name: '2021', value: 9 },
        { name: '2022', value: 10 },
      ]

      const dados = {
        chart: {
            type: tipo
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

    renderGrafico(){

        const pieData = [
            { name: 'Atendimento On-site', y: 30 },
            { name: 'Contratos', y: 50 },
            { name: 'Avulso', y: 10 },
            { name: 'Help Desk', y: 10 },
          ]

        const dados = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
              type: 'pie'
            },
            title: {
                text: 'Ordem de Serviço'
              },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                      color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
                    }
                  }
                }
              },
            series: [
              {
                name: 'QTD',
                colorByPoint: true,
                data: pieData
              }
            ]
          };

        return(
            <div>
                <HighChartsReact highcharts={HighCharts} options={dados} />
            </div>
        )
    }

    renderGrafico3(){

        const dados = {
            chart: {
                type: 'column'
              },
              title: {
                text: 'Ano Atual'
              },
              xAxis: {
                categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
                ],
                crosshair: true
              },
              tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
              },
              plotOptions: {
                column: {
                  pointPadding: 0.2,
                  borderWidth: 0
                }
              },
              series: [{
                name: 'Atendimento On-site',
                data: [49, 71, 106, 129, 144, 176, 135, 148, 216,
                  194, 95, 54]
            
              }, {
                name: 'Contrato',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
                  106.6, 92.3]
            
              }, {
                name: 'Avulso',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
                  51.2]
            
              }, {
                name: 'Help Desk',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
                  51.1]
            
              }]
            }
            

            return(
                <div>
                    <HighChartsReact highcharts={HighCharts} options={dados} />
                </div>
            )
    }

    render() {
        return (
            <Main {...headerProps}>
                <div className="container-fluid">
                    <div className='row mt-2'>
                        <div className='col-12 col-md-5 flex-fill mx-3 sombra'>
                           {this.renderGrafico()}
                        </div>
                        <div className="col-12 col-md-5 flex-fill sombra">
                            {this.renderGrafico2('column', 'Quantidade por Ano')}
                        </div>
                    </div>
                    <div className="row mt-4">
                    <div className='col-12 col-md-5 flex-fill mx-3 sombra'>
                            {this.renderGrafico2('line', 'Projeção')}
                        </div>
                        <div className="col-12 col-md-5 flex-fill sombra">
                            {this.renderGrafico3()}
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className="col-6 col-md-3  d-flex justify-content-center">
                          <ModalGeral corModal="primary" relatorio={this.renderGrafico2('column')} nome="Atendimento On-Site" estilo={{height: 200, width: 400}}
                              link={<Link to="/Dashboard/AtendimentoOnSite" className={`btn btn-primary fw-bold`}>Relatório</Link>} />
                        </div>
                        <div className="col-6 col-md-3 d-flex justify-content-center">
                            <ModalGeral corModal="dark" relatorio={this.renderGrafico2('area')} nome="Contrato" estilo={{height: 200, width: 400}} 
                                 link={<Link to="/Dashboard/Contrato" className={`btn btn-dark fw-bold`}>Relatório</Link>}/>
                        </div>
                        <div className="col-6 col-md-3 d-flex justify-content-center">
                            <ModalGeral corModal="success" relatorio={this.renderGrafico()} nome="Avulso" estilo={{height: 200, width: 400}}
                               link={<Link to="/Dashboard/Avulso" className={`btn btn-success fw-bold`}>Relatório</Link>} />
                        </div>
                        <div className="col-6 col-md-3  d-flex justify-content-center">
                            <ModalGeral corModal="warning" relatorio={this.renderGrafico2()} nome="Help Desk" estilo={{height: 200, width: 400}}
                                link={<Link to="/Dashboard/HelpDesk" className={`btn btn-warning text-light fw-bold`}>Relatório</Link>}/>
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}

{/*<div className='d-flex justify-content-center'>
                <div className='sombra ttb'>
                    <div>
                        <Carrousel />
                    </div>
                     w-75 h-50 
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
        </div>*/}