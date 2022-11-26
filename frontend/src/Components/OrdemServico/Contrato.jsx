import React, { Component } from 'react';
import Main from '../Template/Main';

const headerProps = {
    icon: 'university',
    title: 'Contrato'
}

export default class Contrato extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div>
                    Contrato
                </div>
            </Main>
        )
    }
}