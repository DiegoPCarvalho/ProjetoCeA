import React, { Component } from 'react';
import Main from '../Template/Main';
import './GeralOrdem.css';
import Contract from '../../Assets/Imgs/contrato.jpg';

const headerProps = {
    icon: 'university',
    title: 'Contrato'
}

export default class Contrato extends Component {
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
                            <option selected>Aguardando Chegar</option>
                            <option>Aguardando Vistoria</option>
                            <option>Aguardando Aprovação</option>
                            <option>Aprovado (Separação de Peças)</option>
                            <option>Aguardando Peça/Importação</option>
                            <option>Aprovado (Manutenção)</option>
                            <option>Em Manutenção</option>
                            <option>Manutenção Concluída</option>
                            <option>Revisão</option>
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
                            <a href='/Contrato'><img src={Contract} alt="" /></a>
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