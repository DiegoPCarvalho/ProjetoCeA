import React, { Component } from 'react';
import Main from '../Template/Main';

const headerProps = {
    icon: 'database',
    title: 'Geral'
}

export default class DashboardGeral extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div>
                    Dashboard Geral
                </div>
            </Main>
        )
    }
}