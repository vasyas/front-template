import * as React from 'react';

export class Credit extends React.Component<void, void> {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export class CreditPersonalInfo extends React.Component<void, void> {
    render() {
        return (
            <div>
                Личная информация
            </div>
        );
    }
}