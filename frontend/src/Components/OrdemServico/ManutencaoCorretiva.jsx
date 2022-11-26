import React, { Component } from 'react';
import Main from '../Template/Main';

const headerProps = {
    icon: 'fort-awesome',
    title: 'Manutenção Corretiva'
}

export default class ManutencaoCorretiva extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div>
                    Manutenção Corretiva
                </div>
            </Main>
        )
    }
}