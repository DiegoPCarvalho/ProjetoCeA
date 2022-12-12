import React, { Component } from 'react';
import Main from '../Template/Main';
import './GeralOrdem.css';
import LogoCeA from '../../Assets/Imgs/logoCeA.png';
import { Link } from 'react-router-dom';


const headerProps = {
    icon: 'plane',
    title: 'Atendimento On-site'
}

export default class AtendimentoOnSite extends Component {

    renderTable() {
        return (
            <table className="table table-bordered mt-5" id="table_id">
                <thead className='table-dark'>
                    <tr>
                        <th>Data</th>
                        <th>OS</th>
                        <th>Cliente</th>
                        <th>Equipamento</th>
                        <th>NS</th>
                        <th>CH</th>
                        <th>SLA</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.renderRows()} */}
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>12/05/22</td>
                        <td>12345</td>
                        <td>C&A</td>
                        <td>Coletor</td>
                        <td>12345</td>
                        <td>54321</td>
                        <td>5</td>
                    </tr>

                </tbody>
            </table>
        )
    }

    // renderRows() {
    //     return (

    //     )
    // }

    renderEstagio() {
        return (
            <div className='conteiner-fluid'>
                <div className="row mb-2">
                    <label className='form-label'><strong>Selecione um Estagio</strong></label>
                </div>
                <div className='row'>
                    <div className="col-12 col-md-9">
                        <select className="form-select" aria-label="Default select example" id='estagio'>
                            <option selected>Aguardando Vistoria</option>
                            <option>Vistoriado</option>
                            <option>Aguardando Peça/Importação</option>
                            <option>Aprovado (Manutenção)</option>
                            <option>Expedição</option>
                            <option>Finalizada</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-success">
                            <strong> Buscar </strong>
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        return (
            <Main {...headerProps}>
                {/* <div className='container-fluid'>
                    <div className="boler row mb-2">
                        <div className="imagem col-3">
                            <a href='/AtendimentoOnSite'><img src={LogoCeA} alt="" /></a>
                        </div>
                        <div className="col-6 estagio d-flex justify-content-end ">
                            {this.renderEstagio()}
                        </div>
                        <div className="col-3 d-flex justify-content-end align-items-start">
                            <Link to="/MpAtendimento" className='btn btn-danger'>Voltar</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {this.renderTable()}
                        </div>
                    </div>
                </div> */}
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-3 imagem">
                            <a href='/AtendimentoOnSite'><img src={LogoCeA} alt="" /></a>
                        </div>
                        <div className="col-3 text-light d-flex justify-content-center align-items-start">
                            <div className='bg-success rounded w-50'>
                                <p className='d-flex justify-content-center h1 p-1'>Total </p>
                                <p className='d-flex justify-content-center h3'>50</p>
                            </div>
                        </div>
                        <div className="col-5 d-flex justify-content-end">
                            {this.renderEstagio()}
                        </div>
                        <div className="col-1 d-flex justify-content-end align-items-start">
                            <Link to="/MpAtendimento" className='btn btn-danger'>Voltar</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {this.renderTable()}
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}

