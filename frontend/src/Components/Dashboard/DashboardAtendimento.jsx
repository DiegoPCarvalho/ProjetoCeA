import React, { Component } from 'react';
import Main from '../Template/Main';

const headerProps = {
    icon: 'plane',
    title: 'Atendimento On-site'
}

export default class DashAtendimentoOnSite extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div>
                   Dashboard Atendimento On-site
                </div>
            </Main>
        )
    }
}