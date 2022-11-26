import React, { Component } from 'react';
import Main from '../Template/Main';

const headerProps = {
    icon: 'info-circle',
    title: 'Suporte Remoto'
}

export default class DashboardSuporteRemoto extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div>
                    Dashboard Suporte Remoto
                </div>
            </Main>
        )
    }
}