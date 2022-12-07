import React, { Component } from 'react';
import Main from '../Template/Main';
import './Dashboard.css';
// import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Carrousel
// import Carrousel from '../Carrousel/CarrouselGrafic';


const headerProps = {
    icon: 'database',
    title: 'Geral'
}

export default class DashboardGeral extends Component {

    
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
                    <Modal.Body>{this.renderGrafico()}</Modal.Body>
                </Modal>
            </>
        );
    }
    Card(titulo,numero,cor) {
        return (
            <Card style={{ width: '18rem' }} bg={cor}>
                <Card.Header>
                    <h2 className="text-light d-flex justify-content-center">
                        <strong>{titulo}</strong>
                    </h2>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <h1 className="text-light d-flex justify-content-center">
                            <strong>{numero}</strong>

                        </h1>
                        <p className='text-light d-flex justify-content-center'>Finalizados</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

   renderGrafico2(){
    const myData = [
        { name: 'T1', value: 10 },
        { name: 'T2', value: 4 },
        { name: 'T3', value: 8 },
        { name: 'T4', value: 9 },
        { name: 'T12', value: 10 },
      ]

      const dados = {
        chart: {
            type: 'column'
          },
          title: {
            text: 'Notas do Semestre'
          },
          xAxis: {
            categories: myData.map( x => x.name),
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Notas'
            }
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series: [{
            name: 'My Data',
            data: myData.map( x => x.value )
          }]
      }

      return(
        <HighChartsReact highcharts={HighCharts} options={dados} />
      )
   }

    renderGrafico(){

        const pieData = [
            { name: 'imposto', y: 30 },
            { name: 'salarios', y: 50 },
            { name: 'escritório', y: 10 },
            { name: 'outros', y: 10 },
          ]

        const dados = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
              type: 'pie'
            },
            title: {
                text: 'Despesas da Empresa'
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
                name: 'Brands',
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

    render() {
        return (
            <Main {...headerProps}>
                <div className="container-fluid border">
                    <div className='row border'>
                        <div className='col-12 col-md-6 border p-2'>
                           {this.renderGrafico()}
                        </div>
                        <div className="col-12 col-md-6 border p-2">
                            {this.renderGrafico2()}
                        </div>
                    </div>
                    <div className="row">
                    <div className='col-12 col-md-6 border p-2'>
                            {this.renderModal()}
                        </div>
                        <div className="col-12 col-md-6 border p-2">
                            grafico 4
                        </div>
                    </div>
                    <div className='row border'>
                        <div className="col-6 col-md-3 border">
                            card 1
                        </div>
                        <div className="col-6 col-md-3 border">
                            card 2
                        </div>
                        <div className="col-6 col-md-3 border">
                            card 3
                        </div>
                        <div className="col-6 col-md-3 border">
                            card 4
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