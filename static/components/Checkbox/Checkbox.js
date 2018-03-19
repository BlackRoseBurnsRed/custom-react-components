import React from 'react'

import './checkbox.css'

export class Checkbox extends React.Component {
    render() {
        return (
            <label>
                <input class="checkbox" type="checkbox" name="checkbox-test" />
                <span class="checkbox-custom"></span>
                <span class="label">{this.props.label}</span>
            </label>
        )
    }
}