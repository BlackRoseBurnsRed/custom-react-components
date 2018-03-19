import React from 'react'

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        return (
            <button onClick={this.onClick.bind(this)}>Click me</button>
        )
    }
}