import React, { Component } from 'react';
import Main from '../Template/Main';

const headerProps = {
    icon: 'university',
    title: 'Contrato'
}

export default class DashboardContrato extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div>
                    Dashboard Contrato
                </div>
            </Main>
        )
    }
}