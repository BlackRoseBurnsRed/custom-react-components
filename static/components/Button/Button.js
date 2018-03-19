import React from 'react';
import './button.css';

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
        let buttonClass = `button ${this.props.type ? this.props.type : 'button-default'}`;
        return (
            <div onClick={this.onClick.bind(this)} className={buttonClass}>Click me</div>
        )
    }
}