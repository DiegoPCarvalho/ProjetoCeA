import React, { Component } from 'react';
import Main from '../Template/Main';

const headerProps = {
    icon: 'info-circle',
    title: 'Suporte Remoto'
}

export default class SuporteRemoto extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div>
                    Suporte Remoto
                </div>
            </Main>
        )
    }
}