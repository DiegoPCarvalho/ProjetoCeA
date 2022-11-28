import React, { Component } from 'react';
import Main from '../Template/Main';
import './GeralOrdem.css';
import Atendimento from '../../Assets/Imgs/Atendimento.png';


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
                            <th>OS</th>
                            <th>Cliente</th>
                            <th>Equipamento</th>
                            <th>NS</th>
                            <th>CH</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.renderRows()} */}
                        <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>C&A</td>
                    <td>Coletor</td>
                    <td>12345</td>
                    <td>54321</td>
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
                <div className='container-fluid'>
                    <div className="boler row mb-2">
                        <div className="imagem col-3">
                            <a href='/AtendimentoOnSite'><img src={Atendimento} alt="" /></a>
                        </div>
                        <div className="col-6 estagio">
                            {this.renderEstagio()}
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

