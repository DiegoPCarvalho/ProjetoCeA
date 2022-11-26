import React, { Component } from 'react';
import Main from '../Template/Main';

const headerProps = {
    icon: 'fort-awesome',
    title: 'Manutenção Corretiva'
}

export default class DashboardManutencaoCorretiva extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div>
                   Dashboard Manutenção Corretiva
                </div>
            </Main>
        )
    }
}