import React, { Component } from 'react';
import Main from '../Template/Main';

const headerProps = {
    icon: 'plane',
    title: 'Atendimento On-site'
}

export default class AtendimentoOnSite extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div>
                    Atendimento On-site
                </div>
            </Main>
        )
    }
}